#!/bin/bash
# Takes in a URL, sends a request to that URL, and displays the size of the body of the response
#!/bin/bash
curl -sI "$1" | grep -i Content-Length | awk '{print $2}' | xargs echo "The size of the response body is {} bytes"

