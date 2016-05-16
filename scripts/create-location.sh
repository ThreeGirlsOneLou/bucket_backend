TOKEN="UejK9HHru3DtHO55MHzXN2iCyg1B8zOWt8VLMYV+mJc=--V02KqiXi2DO7cHReoIGcruJ4Yp1pQYROOEyhWv9dpu0="

curl --include --request POST http://localhost:3000/locations \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "user": {
      "id": "57390534834eb4b8cff54aaf"
    },
    "location": {
      "name": "again",
      "coords": {
        "lat": 434343,
        "long": 34534343
      }
    }
  }'
