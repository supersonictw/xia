#!/bin/sh

set -e
INSTANCES="${PM2_INSTANCES:-1}"

echo "Starting App server with pm2-runtime (instances: $INSTANCES)..."
exec pm2-runtime start server/index.mjs -i "$INSTANCES" --name xia
