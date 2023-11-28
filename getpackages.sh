#!/bin/bash

PACKAGE_JSON_PATH="./package.json"

DELIMITER="<*T&*>"

dependencies=$(node -e "console.log(Object.entries(require('$PACKAGE_JSON_PATH').dependencies))")

RESULT="${DELIMITER}${dependencies}${DELIMITER}"

echo "$RESULT"