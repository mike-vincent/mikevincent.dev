#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "$ROOT_DIR"
HOST="localhost"
PORT="8085"
BASE_URL="http://${HOST}:${PORT}"

echo "Building site..."
npm run build

if ! lsof -iTCP:"${PORT}" -sTCP:LISTEN >/dev/null 2>&1; then
  echo "Starting preview server at ${BASE_URL}"
  nohup npm run preview -- --host "${HOST}" --port "${PORT}" >/tmp/mikevincent-preview.log 2>&1 < /dev/null &
else
  echo "Preview server already running on port ${PORT}"
fi

echo "Waiting for ${BASE_URL}/..."
for _ in $(seq 1 45); do
  status="$(/usr/bin/curl -s -o /dev/null -w "%{http_code}" "${BASE_URL}/" || true)"
  if [[ "$status" == "200" ]]; then
    open -a Safari "${BASE_URL}/?refresh=styled"
    open -a Safari "${BASE_URL}/brands?refresh=styled"
    open -a Safari "${BASE_URL}/resume?refresh=styled"
    echo "Opened styled Home, Brands, and Resume pages in Safari."
    exit 0
  fi
  sleep 1
done

echo "Preview server did not become ready on /" >&2
exit 1
