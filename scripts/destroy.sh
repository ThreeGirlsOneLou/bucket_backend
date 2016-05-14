ID="57378b0a0a39cffc10a29bdb"

curl --include --request DELETE http://localhost:3000/locations/$ID \
  --header "Content-Type: application/json" \
  --data '{
    "user": {
      "id": "57378aae0a39cffc10a29bda"
    },
    "location": {
      "id": "57378b0a0a39cffc10a29bdb"
    }
  }'



  ​
  ​
