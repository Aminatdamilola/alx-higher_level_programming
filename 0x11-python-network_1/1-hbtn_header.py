#!/usr/bin/python3
"""script that takes in a URL, sends a request to the URL and displays the
value of the X-Request-Id variable found in the header of the response."""
import urllib.request
import sys

if len(sys.argv) < 2:
    print("Error: You must provide a URL to request")
    sys.exit(1)

url = sys.argv[1]

with urllib.request.urlopen(url) as response:
    x_request_id = response.headers.get('X-Request-Id')
    if x_request_id:
        print(f"The X-Request-Id value is: {x_request_id}")
    else:
        print("The X-Request-Id header is not present in the response")
