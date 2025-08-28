#!/usr/bin/env bash
set -euo pipefail

# verify_coverage_and_push.sh
# Replaces CI/YAML placeholders with a proper bash script.
# Usage:
#   scripts/verify_coverage_and_push.sh --branch <branch> --commit-message "<message>" [--dry-run]
#
# Examples:
#   scripts/verify_coverage_and_push.sh --branch feature/foo --commit-message "chore: run tests" --dry-run
#   scripts/verify_coverage_and_push.sh --branch main --commit-message "feat: add X"

usage() {
  cat <<'USAGE'
Usage: verify_coverage_and_push.sh --branch <branch> --commit-message "<message>" [--dry-run]

Options:
  --branch <branch>          Target git branch to checkout/pull/push
  --commit-message <message> Commit message to use
  --dry-run                  Print what would be run and exit
  -h, --help                 Show this help
USAGE
}

BRANCH=""
COMMIT_MESSAGE=""
DRY_RUN=false

while [[ $# -gt 0 ]]; do
  case "$1" in
    --branch)
      [[ $# -ge 2 ]] || { echo "ERROR: --branch requires a value" >&2; exit 1; }
      BRANCH="$2"
      shift 2
      ;;
    --commit-message)
      [[ $# -ge 2 ]] || { echo "ERROR: --commit-message requires a value" >&2; exit 1; }
      COMMIT_MESSAGE="$2"
      shift 2
      ;;
    --dry-run)
      DRY_RUN=true
      shift
      ;;
    -h|--help)
      usage
      exit 0
      ;;
    *)
      echo "Unknown argument: $1" >&2
      usage
      exit 1
      ;;
  esac
done

if [[ -z "$BRANCH" || -z "$COMMIT_MESSAGE" ]]; then
  echo "ERROR: --branch and --commit-message are required" >&2
  usage
  exit 1
fi

require_cmd() {
  if ! command -v "$1" >/dev/null 2>&1; then
    echo "ERROR: Required command '$1' not found in PATH" >&2
    exit 1
  fi
}

require_cmd git
require_cmd npm
require_cmd node

if "$DRY_RUN"; then
  echo "[DRY RUN] Would run unit tests and coverage:"
  echo "  npm run test -- --coverage"
  echo "[DRY RUN] Would check coverage in coverage/coverage-summary.json"
  echo "[DRY RUN] Would attempt commit & push to branch: $BRANCH with message: $COMMIT_MESSAGE"
  exit 0
fi

# Safety check for uncommitted changes
if [[ -n "$(git status --porcelain)" ]]; then
  echo "ERROR: You have uncommitted changes. Commit/stash them first." >&2
  exit 1
fi

# Run tests with coverage
echo "Running unit tests with coverage..."
npm run test -- --coverage

echo "Checking test coverage..."
if [[ ! -f coverage/coverage-summary.json ]]; then
  echo "❌ Coverage file not found. Tests may have failed." >&2
  exit 1
fi

TOTAL=$(node -pe "require('./coverage/coverage-summary.json').total.lines.pct")
echo "✅ Total line coverage: $TOTAL%"

# Use Node for float comparison (avoids bc dependency)
if ! node -e "process.exit(parseFloat(process.argv[1]) >= 50 ? 0 : 1)" "$TOTAL"; then
  echo "❌ Coverage is below 50%. Aborting commit." >&2
  exit 1
else
  echo "✅ Coverage is ≥ 50%. Proceeding to commit."
fi

# Pull latest changes and push
echo "Pulling latest changes for branch '$BRANCH'..."
git fetch origin
# Use checkout -B only if local branch doesn't exist; otherwise just checkout
if git rev-parse --verify "$BRANCH" >/dev/null 2>&1; then
  git checkout "$BRANCH"
else
  git checkout -b "$BRANCH"
fi

git pull --ff-only origin "$BRANCH" || true

echo "Committing and pushing changes..."
# Stage any changes (e.g., generated files if needed)
git add .
# Allow no-op commit if nothing changed
if git diff --cached --quiet; then
  echo "No staged changes to commit. Skipping commit."
else
  git commit -m "$COMMIT_MESSAGE"
fi

git push origin "$BRANCH"

echo "✅ Done."

