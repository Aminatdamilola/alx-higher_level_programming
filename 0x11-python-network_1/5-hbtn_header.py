#!/usr/bin/python3
"""Script that takes in a URL, sends a request to the URL and displays the
value of the variable X-Request-Id in the response header"""
import requests
import sys

if len(sys.argv) < 2:
    print("Error: You must provide a URL to request")
    sys.exit(1)

url = sys.argv[1]

response = requests.get(url)

x_request_id = response.headers.get('X-Request-Id')

print(x_request_id)
