curl --include --request DELETE http://localhost:3000/locations \
  --header "Content-Type: application/json" \
  --data '{
    "user": {
      "id": 57367b0041aca8458585a139
    },
    "location": {
      "id": 57367fef457263288605b3b2
    }
  }'
