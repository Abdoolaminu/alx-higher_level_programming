#!/bin/bash
curl -X GET "http://0.0.0.0:5000/catch_me" -H "User-Agent:Mozilla/5.0" -L -i -s -o /dev/null -w "HTTP %{http_code}\n" -H "Referer: http://google.com" -H "Origin: http://google.com" --data "You got me!"

