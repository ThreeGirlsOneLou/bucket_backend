curl --include --request POST http://localhost:3000/locations \
  --header "Content-Type: application/json" \
  --data '{
    "user": {
      "id": "57367b0041aca8458585a139"
    },
    "location": {
      "name": "again",
      "coords": {
        "lat": 434343,
        "long": 34534343
      }
    }
  }'
