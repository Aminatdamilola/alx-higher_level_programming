#!/bin/bash
# Script that takes in a URL and displays all HTTP methods the server will accept.
curl -sI -X OPTIONS "$1" | grep "Allow:" | tr -d '\r' | cut -d " " -f 2-
