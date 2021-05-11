#!/usr/bin/env bash

VERSION=${1:-latest}

echo "Pulling image ${VERSION}"
mkdir report

docker run --rm \
    -v "$(pwd)"/report/:/app/report/ \
    amangupta210897/Docker-jenkins:${VERSION}

status=$?

echo "Final status ${status}"
exit ${status}
