curl --include --request POST http://localhost:3000/locations \
  --header "Content-Type: application/json" \
  --data '{
    "user": {
      "id": "57364508038cdf3df77b406f"
    },
    "location": {
      "name": "example name",
      "coords": {
        "lat": 434,
        "long": 34534
      }
    }
  }'
