#!/bin/bash

PACKAGE_JSON_PATH="./package.json"

DELIMITER="<*T&*>"

dependencies=$(node -e "console.log(require('$PACKAGE_JSON_PATH').dependencies)")

RESULT="${DELIMITER}${dependencies}${DELIMITER}"

echo "$RESULT"