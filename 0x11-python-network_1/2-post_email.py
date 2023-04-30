#!/usr/bin/python3
""" Script that takes in a URL and an email."""
import urllib.parse
import urllib.request
import sys

if len(sys.argv) < 3:
    print("Error: You must provide a URL and an email")
    sys.exit(1)

url = sys.argv[1]
email = sys.argv[2]

data = urllib.parse.urlencode({'email': email}).encode('utf-8')
req = urllib.request.Request(url, data=data)

with urllib.request.urlopen(req) as response:
    body = response.read().decode('utf-8')
    print(body)
