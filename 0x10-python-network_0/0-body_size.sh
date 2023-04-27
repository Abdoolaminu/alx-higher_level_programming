#!/bin/bash
# takes URL, sends a request to that URL, displays size of the body of the response
curl -sI GET "$1" | grep -i "Content-Length" | cut -d " " -f2
