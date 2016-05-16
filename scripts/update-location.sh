#!/bin/bash

ID="57390672834eb4b8cff54ab0"
TOKEN="UejK9HHru3DtHO55MHzXN2iCyg1B8zOWt8VLMYV+mJc=--V02KqiXi2DO7cHReoIGcruJ4Yp1pQYROOEyhWv9dpu0="
​
curl --include --request PATCH http://localhost:3000/locations/$ID \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "user": {
      "id": "57390534834eb4b8cff54aaf"
    },
    "location": {
       "field": "visited",
      "change": "true",
      "id": "57390672834eb4b8cff54ab0"
    }
  }'
