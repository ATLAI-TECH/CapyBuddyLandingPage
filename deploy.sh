#!/bin/bash
# Auto-pull deploy script for CapyBuddyLandingPage
# Checks if remote has new commits, pulls if so

REPO=/www/wwwroot/CapyBuddyLandingPage
LOG="$REPO/deploy.log"

cd "$REPO" || exit 1

git fetch origin main --quiet 2>/dev/null

LOCAL=$(git rev-parse HEAD)
REMOTE=$(git rev-parse origin/main)

if [ "$LOCAL" = "$REMOTE" ]; then
    exit 0
fi

if ! OUTPUT=$(git pull origin main --quiet 2>&1); then
    {
        echo "$(date '+%Y-%m-%d %H:%M:%S') Deploy FAILED (still at $(git log --oneline -1))"
        echo "$OUTPUT" | sed 's/^/    /'
    } >> "$LOG"
    exit 1
fi

echo "$(date '+%Y-%m-%d %H:%M:%S') Deployed: $(git log --oneline -1)" >> "$LOG"
