#!/usr/bin/python3
"""script that fetches https://alx-intranet.hbtn.io/status"""
import requests

response = requests.get('https://alx-intranet.hbtn.io/status')
content = response.text

print("Body response:")
print("\t- type: {}".format(type(content)))
print("\t- content: {}".format(content))
