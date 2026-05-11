#!/usr/bin/env bash
# 跑前先在另一个终端执行：vercel dev
BASE=${1:-http://localhost:3000}
cases=(
  edge-default-fn
  edge-async-fn
  edge-fetch-obj
  edge-named-get
  node-classic
  node-default-web
  node-fetch-obj
  node-named-get
)
printf "%-25s %-6s %s\n" "case" "code" "body"
printf "%-25s %-6s %s\n" "----" "----" "----"
for c in "${cases[@]}"; do
  resp=$(curl -s -o /tmp/_vfc_body -w "%{http_code}" "$BASE/api/$c")
  body=$(head -c 120 /tmp/_vfc_body | tr -d '\n')
  printf "%-25s %-6s %s\n" "$c" "$resp" "$body"
done
rm -f /tmp/_vfc_body
