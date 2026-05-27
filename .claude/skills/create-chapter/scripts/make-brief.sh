#!/usr/bin/env bash
# make-brief.sh — Stage 1 of the chapter pipeline.
# Extracts text from an NCERT chapter PDF, sends it to DeepSeek with a strict
# prompt, and saves the structured brief to src/data/briefs/<slug>-brief.md.
#
# Usage:
#   bash .claude/skills/create-chapter/scripts/make-brief.sh <pdf-path> <slug>
#
# Example:
#   bash .claude/skills/create-chapter/scripts/make-brief.sh \
#     NCERT-Math-11th/kemh103.pdf grade-11-ch3
#
# Requires:
#   - pdftotext  (brew install poppler)
#   - jq         (brew install jq)
#   - DEEPSEEK_API_KEY  (export in shell)

set -euo pipefail

if [ "${1:-}" = "--help" ] || [ "${1:-}" = "-h" ] || [ $# -lt 2 ]; then
  cat <<'USAGE'
Usage: make-brief.sh <pdf-path> <slug>

Generates a chapter brief from a PDF using the DeepSeek API.

Arguments:
  pdf-path   Path to the source PDF, e.g. NCERT-Math-11th/kemh103.pdf
  slug       Output slug, e.g. grade-11-ch3
             Writes to: src/data/briefs/<slug>-brief.md

Required env:
  DEEPSEEK_API_KEY    Get one at https://platform.deepseek.com/api_keys

Required tools:
  pdftotext (poppler), jq, curl
USAGE
  exit 0
fi

PDF_PATH="$1"
SLUG="$2"

# Resolve the script directory so the prompt file is found regardless of cwd.
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROMPT_FILE="$SCRIPT_DIR/brief-prompt.txt"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../../.." && pwd)"
OUT_DIR="$REPO_ROOT/src/data/briefs"
OUT_FILE="$OUT_DIR/${SLUG}-brief.md"

# Auto-load .env.local from repo root if DEEPSEEK_API_KEY isn't already in env.
# Lets Claude Code automated shells find the key without needing ~/.zshrc.
if [ -z "${DEEPSEEK_API_KEY:-}" ] && [ -f "$REPO_ROOT/.env.local" ]; then
  # shellcheck disable=SC1090
  set -a; . "$REPO_ROOT/.env.local"; set +a
fi

# --- preflight ---
command -v pdftotext >/dev/null || { echo "ERROR: pdftotext not found. Install: brew install poppler" >&2; exit 1; }
command -v jq        >/dev/null || { echo "ERROR: jq not found. Install: brew install jq" >&2; exit 1; }
command -v curl      >/dev/null || { echo "ERROR: curl not found." >&2; exit 1; }
[ -n "${DEEPSEEK_API_KEY:-}" ] || { echo "ERROR: DEEPSEEK_API_KEY is not set. Get one at https://platform.deepseek.com/api_keys and export it." >&2; exit 1; }
[ -f "$PDF_PATH" ]  || { echo "ERROR: PDF not found at $PDF_PATH" >&2; exit 1; }
[ -f "$PROMPT_FILE" ] || { echo "ERROR: prompt file missing at $PROMPT_FILE" >&2; exit 1; }

mkdir -p "$OUT_DIR"

# --- extract PDF text ---
echo "→ Extracting text from $PDF_PATH ..."
TMP_TEXT=$(mktemp)
trap 'rm -f "$TMP_TEXT"' EXIT
pdftotext "$PDF_PATH" "$TMP_TEXT"
WORDS=$(wc -w < "$TMP_TEXT" | tr -d ' ')
echo "  extracted ~$WORDS words"

# --- build request body ---
SYSTEM_PROMPT=$(cat "$PROMPT_FILE")
USER_TEXT=$(cat "$TMP_TEXT")

BODY=$(jq -n \
  --arg system "$SYSTEM_PROMPT" \
  --arg user   "$USER_TEXT" \
  '{
    model: "deepseek-chat",
    messages: [
      { role: "system", content: $system },
      { role: "user",   content: $user }
    ],
    temperature: 0.3,
    max_tokens: 10000
  }')

# --- call DeepSeek ---
echo "→ Calling DeepSeek (deepseek-chat) ..."
RESPONSE=$(curl -sS https://api.deepseek.com/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $DEEPSEEK_API_KEY" \
  -d "$BODY")

# --- extract content ---
CONTENT=$(echo "$RESPONSE" | jq -r '.choices[0].message.content // empty')
if [ -z "$CONTENT" ] || [ "$CONTENT" = "null" ]; then
  echo "ERROR: DeepSeek returned no content. Full response:" >&2
  echo "$RESPONSE" | jq . >&2
  exit 1
fi

echo "$CONTENT" > "$OUT_FILE"
LINES=$(wc -l < "$OUT_FILE" | tr -d ' ')
echo "✓ Saved brief to $OUT_FILE ($LINES lines)"
echo ""
echo "Next: read $OUT_FILE and proceed to Stage 2 (build the page)."
