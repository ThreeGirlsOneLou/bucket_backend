#!/bin/bash

ID="5738bd9c3c0d8f711b266062"
TOKEN="+uorbb/2wWhGcWPEaJ2X6jbMvxU5BRbw1alksJ61YpM=--ZEkKsGUiEHO9WoAbnDGZSYiYe8ClTYxGvayP6cksXcU="
​
curl --include --request PATCH http://localhost:3000/locations/$ID \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "user": {
      "id": "57367b0041aca8458585a139"
    },
    "location": {
       "field": "visited",
      "change": "true",
      "id": "5738bd9c3c0d8f711b266062"
    }
  }'
