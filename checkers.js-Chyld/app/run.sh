#!/bin/bash

./node_modules/.bin/webpack
if [ $? -ne 0 ]; then echo "REACT COMPILE: FAILED"; exit 1; fi

./node_modules/.bin/babel server -d dst -q
if [ $? -ne 0 ]; then echo "EXPRESS COMPILE: FAILED"; exit 1; fi

node --debug ./dst/server.js
