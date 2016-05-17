TOKEN="CRmGcue7TZwMHcsIgbisJVTCvD53P5y8CmQYPrKACK4=--Bef26wMNs77CSdbvSzbJkAf177bhErS3I2WJWbNhA9s="

curl --include --request POST http://localhost:3000/locations \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "user": {
      "id": "573b1eb43d4992c0080d5b08"
    },
    "location": {
      "name": "again",
      "coords": {
        "lat": 434343,
        "long": 34534343
      },
      "url": "testing url"
    }
  }'
