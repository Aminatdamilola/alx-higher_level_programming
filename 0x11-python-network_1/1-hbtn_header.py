#!/usr/bin/python3
"""script that takes in a URL, sends a request to the URL and displays the
value of the X-Request-Id variable found in the header of the response."""

import urllib.request
from sys import argv


with urllib.request.urlopen(argv[1]) as response:
    the_head = response.info()
    request_id = the_head['X-Request-Id']
print(request_id)
