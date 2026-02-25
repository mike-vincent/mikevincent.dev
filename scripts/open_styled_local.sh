#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"

echo "Building site..."
npm run build

if ! lsof -iTCP:4321 -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Starting preview server at http://127.0.0.1:4321"
  nohup npm run preview -- --host 127.0.0.1 --port 4321 >/tmp/mikevincent-preview.log 2>&1 < /dev/null &
else
  echo "Preview server already running on port 4321"
fi

echo "Waiting for http://127.0.0.1:4321/brands..."
for _ in $(seq 1 30); do
  status="$(curl -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:4321/brands" || true)"
  if [[ "$status" == "200" ]]; then
    open -a Safari "http://127.0.0.1:4321/brands?refresh=styled"
    open -a Safari "http://127.0.0.1:4321/resume?refresh=styled"
    echo "Opened styled Brands and Resume pages in Safari."
    exit 0
  fi
  sleep 1
done

echo "Preview server did not become ready on /brands" >&2
exit 1
