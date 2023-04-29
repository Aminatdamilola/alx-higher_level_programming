#!/usr/bin/python3
import urllib.request
from sys import argv
url = sys.argv[1]

with urllib.request.urlopen(argv[1]) as response:
    headers = response.info()
    x_request_id = headers['X-Request-Id']

print(x_request_id)
