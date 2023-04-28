#!/bin/bash
# Takes in a URL, sends a request to that URL, and displays the size of the body of the response

if [ $# -eq 0 ]; then
  echo "Please provide a URL as an argument"
  exit 1
fi

size=$(curl -s -w '%{size_download}' -o /dev/null "$1")

echo "Size of response body: ${size} bytes"
