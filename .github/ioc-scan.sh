#!/usr/bin/env bash
# ioc-scan.sh v2 - block the PolinRider build-config loader (incident 2026-11-20).
# Usage:
#   ioc-scan.sh [PATH...]          scan working-tree files/dirs (default .)
#                                  IOC_SCAN_BUILD=1 also scans node_modules / dist / .next / .astro
#   ioc-scan.sh --staged           scan the git index (pre-commit)
#   ioc-scan.sh --rev REV [BASE]   scan tree of REV plus commits BASE..REV (BASE=--new: commits not on any remote)
#   ioc-scan.sh --history          scan every commit reachable from all refs
# Exit 0 = clean, 1 = indicator found, 2 = usage error.  Works on bash 3.2 + BSD tools.
# Edit 2026-11-20 (radioindex.org purge, keep minimal): LONG_SKIP_RE now matches rev:path labels via (^|[/:]). Hook still owned by sand-subagent-0d02bfad.
set -u
export GIT_NO_LAZY_FETCH=1 LC_ALL=C
# Patterns are written so this file never matches itself.
SIG_RE="global\.[oi]='(8-|A)|global\[['\"]_?[A-Za-z]{1,2}['\"]\]=['\"]8-|global\[['\"]r['\"]\]=require;|var _\\\$_[0-9a-f]{4}=\(function\(|154\.91\.0\.20|166\.0\.106\.182|0xa322e5f[3]|0x33ff3ed[a]"   # case-insensitive
EVAL_RE='(eval|Function)\([[:space:]]*(atob|Buffer\.from|decodeURIComponent\([[:space:]]*escape\([[:space:]]*atob)\('
SPACE_RE='^[[:space:]]*[^*/[:space:]].*[^[:space:]] {200,}[^[:space:]]'   # skips comment/doc lines (aligned markdown tables in .d.ts); edit 2026-11-20 local-clones worker
RPC_RE='infura\.io|alchemy(api)?\.(com|io)|cloudflare-eth\.com|llamarpc\.com|rpc\.ankr\.com|bsc-dataseed|publicnode\.com|quiknode\.pro|eth-mainnet|bsc-rpc|binance\.org|trongrid\.io|polygon-rpc\.com|etherscan\.io|bscscan\.com|blastapi\.io|drpc\.org|1rpc\.io|mainnet\.base\.org'
LONG_SKIP_RE='(^|[/:])playwright\.config\.(js|mjs|cjs|ts|mts)$'  # also match rev:path labels from --rev (radioindex purge 2026-11-20; was (^|/) which missed dd7ba491:playwright.config.ts)
CONF_RE='(^|/)([^/]*\.config\.(js|mjs|cjs|ts|mts|cts)|\.?(eslintrc|babelrc|postcssrc|prettierrc|stylelintrc|tailwindrc)(\.(js|cjs|mjs|ts|json))?|App\.(js|jsx|ts|tsx|mjs))$'
JS_RE='\.(js|mjs|cjs|ts|mts|cts|jsx|tsx)$'
TXT_RE='\.(js|mjs|cjs|ts|mts|cts|jsx|tsx|json|yml|yaml|sh|html|astro|vue|svelte)$'
PRUNE='node_modules .git dist .next .astro .turbo .vercel .output build coverage .svelte-kit'
found=0
hit(){ echo "IOC: $*" >&2; found=1; }
# check_file REALPATH LABEL : every rule for one file
check_file(){
  local f=$1 l=$2 nm=0
  case "$l" in */node_modules/*|node_modules/*) nm=1;; esac
  if echo "$l" | grep -qiE '\.woff2$'; then
    case "${l##*/}" in ._*) return 0;; esac     # macOS AppleDouble metadata, not a font
    [ "$(head -c4 "$f" 2>/dev/null | od -An -tx1 | tr -d ' \n')" = 774f4632 ] || hit "$l (.woff2 without font header)"
    grep -aqE "var _\\\$_|global\.[oi]=|eval\(|require\(['\"]|String\.fromCharCode|module\.exports" "$f" 2>/dev/null && hit "$l (.woff2 contains JS)"
    return
  fi
  echo "$l" | grep -qE "$TXT_RE" || return 0
  grep -qiE "$SIG_RE" "$f" 2>/dev/null && hit "$l (signature)"
  if echo "$l" | grep -qE "$JS_RE"; then
    grep -qE "$SPACE_RE" "$f" 2>/dev/null && hit "$l (200+ space padding)"
    [ $nm = 0 ] && grep -qE "$EVAL_RE" "$f" 2>/dev/null && hit "$l (eval/Function of atob/Buffer)"
  fi
  if echo "$l" | grep -qE "$CONF_RE"; then
    grep -qiE "$RPC_RE" "$f" 2>/dev/null && hit "$l (blockchain RPC host in config)"
    echo "$l" | grep -qE "$LONG_SKIP_RE" || { awk 'length($0)>1000{f=1;exit} END{exit !f}' "$f" 2>/dev/null && hit "$l (line >1000 chars in config)"; }
  fi
  return 0
}
list_paths(){ # print candidate files under the given paths
  local p n expr=""
  if [ "${IOC_SCAN_BUILD:-0}" = 1 ]; then expr="-name .git"; else
    for n in $PRUNE; do expr="$expr${expr:+ -o }-name $n"; done; fi
  for p in "$@"; do
    if [ -f "$p" ]; then echo "$p"; else
      find "$p" \( $expr \) -prune -o -type f \( -name '*.js' -o -name '*.mjs' -o -name '*.cjs' -o -name '*.ts' -o -name '*.mts' -o -name '*.cts' -o -name '*.jsx' -o -name '*.tsx' -o -name '*.json' -o -name '*.yml' -o -name '*.yaml' -o -name '*.sh' -o -name '*.html' -o -name '*.astro' -o -name '*.vue' -o -name '*.svelte' -o -name '*.woff2' -o -name '.eslintrc' -o -name '.babelrc' \) -print 2>/dev/null
    fi
  done
}
scan_paths(){
  local lst f; lst=$(mktemp)
  list_paths "$@" > "$lst"
  # bulk passes (fast)
  while IFS= read -r f; do hit "$f (signature)"; done < <(grep -vE '\.woff2$' "$lst" | tr '\n' '\0' | xargs -0 grep -liE "$SIG_RE" 2>/dev/null)
  while IFS= read -r f; do hit "$f (200+ space padding)"; done < <(grep -E "$JS_RE" "$lst" | tr '\n' '\0' | xargs -0 grep -lE "$SPACE_RE" 2>/dev/null)
  while IFS= read -r f; do hit "$f (eval/Function of atob/Buffer)"; done < <(grep -E "$JS_RE" "$lst" | grep -v '/node_modules/' | tr '\n' '\0' | xargs -0 grep -lE "$EVAL_RE" 2>/dev/null)
  # per-file passes for configs and fonts
  while IFS= read -r f; do
    if echo "$f" | grep -qiE '\.woff2$'; then check_file "$f" "$f"; continue; fi
    grep -qiE "$RPC_RE" "$f" 2>/dev/null && hit "$f (blockchain RPC host in config)"
    echo "$f" | grep -qE "$LONG_SKIP_RE" || { awk 'length($0)>1000{f=1;exit} END{exit !f}' "$f" 2>/dev/null && hit "$f (line >1000 chars in config)"; }
  done < <(grep -E "$CONF_RE|\.woff2$" "$lst" | grep -v '/node_modules/')
  rm -f "$lst"
}
scan_blob(){ # $1=object spec (":path" or "rev:path"), $2=label
  local tmp; tmp=$(mktemp); git cat-file blob "$1" > "$tmp" 2>/dev/null; check_file "$tmp" "$2"; rm -f "$tmp"
}
adds_ioc(){ git show --format= "$1" 2>/dev/null | grep -qiE "^\+.*($SIG_RE)|^\+.*($EVAL_RE)"; }
scan_rev(){ # $1=rev [$2=base]
  local rev=$1 base=${2:-} f c
  while IFS= read -r f; do hit "$f (signature)"; done < <(git grep -IliE "$SIG_RE" "$rev" 2>/dev/null)
  while IFS= read -r f; do hit "$f (200+ space padding)"; done < <(git grep -IlE "$SPACE_RE" "$rev" -- '*.js' '*.mjs' '*.cjs' '*.ts' '*.mts' '*.cts' '*.jsx' '*.tsx' 2>/dev/null)
  while IFS= read -r f; do hit "$f (eval/Function of atob/Buffer)"; done < <(git grep -IlE "$EVAL_RE" "$rev" -- '*.js' '*.mjs' '*.cjs' '*.ts' '*.mts' '*.cts' '*.jsx' '*.tsx' ':!**/node_modules/**' 2>/dev/null)
  while IFS= read -r f; do scan_blob "$rev:$f" "$rev:$f"; done < <(git ls-tree -r --name-only "$rev" 2>/dev/null | grep -E "$CONF_RE|\.woff2$" | grep -v 'node_modules/')
  [ "${IOC_SCAN_RANGE:-1}" = 1 ] || return 0
  local args; if [ "$base" = "--new" ]; then args="$rev --not --remotes"; elif [ -n "$base" ]; then args="$base..$rev"; else args="$rev"; fi
  while IFS= read -r c; do adds_ioc "$c" && hit "commit $c adds IOC text"; done < <(git log -i --format=%h -E -G"$SIG_RE|$EVAL_RE" $args 2>/dev/null)
}
case "${1:-}" in
  --staged)
    while IFS= read -r -d '' f; do scan_blob ":$f" "$f"; done < <(git diff --cached --name-only -z --diff-filter=ACMR) ;;
  --rev) [ -n "${2:-}" ] || { echo "usage: --rev REV [BASE]" >&2; exit 2; }; scan_rev "$2" "${3:-}" ;;
  --history)
    while IFS= read -r c; do adds_ioc "$c" && hit "commit $c adds IOC text"; done < <(git log --all -i --format=%h -E -G"$SIG_RE|$EVAL_RE" 2>/dev/null) ;;
  -h|--help) sed -n '2,9p' "$0"; exit 0 ;;
  *) [ $# -eq 0 ] && set -- .; scan_paths "$@" ;;
esac
if [ $found = 1 ]; then
  echo "ioc-scan: malware indicators found. Do not commit, push, build or deploy; report to Michael." >&2
  exit 1
fi
exit 0
