ID="57376f2767d1ea9f064faafb"

curl --include --request PATCH http://localhost:3000/locations/$ID \
  --header "Content-Type: application/json" \
  --data '{
    "user": {
      "id": "57367b0041aca8458585a139"
    },
    "location": {
      "name": "test change name"
    }
  }'
