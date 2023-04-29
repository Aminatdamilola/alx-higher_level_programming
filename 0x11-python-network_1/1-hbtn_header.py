#!/usr/bin/python3
"""script that takes in a URL, sends a request to the URL and displays the
value of the X-Request-Id variable found in the header of the response"""

import urllib.request
import sys

if len(sys.argv) < 2:
    print("Error: You must provide a URL to request")
    sys.exit(1)

url = sys.argv[1]

req = urllib.request.Request(url)

with urllib.request.urlopen(req) as response:
    headers = response.info()
    print(headers['X-Request-Id'])
