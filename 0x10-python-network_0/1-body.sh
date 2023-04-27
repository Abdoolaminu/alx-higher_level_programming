#!/bin/bash
# Takes URL, send GET request to the URL, displays body of response
curl -sX GET "$1" -L 200
