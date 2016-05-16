TOKEN="UejK9HHru3DtHO55MHzXN2iCyg1B8zOWt8VLMYV+mJc=--V02KqiXi2DO7cHReoIGcruJ4Yp1pQYROOEyhWv9dpu0="
ID="57390672834eb4b8cff54ab0"

curl --include --request DELETE http://localhost:3000/locations/$ID \
  --header "Authorization: Token token=$TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "user": {
      "id": "57390534834eb4b8cff54aaf"
    },
    "location": {
      "id": "57390672834eb4b8cff54ab0"
    }
  }'



  ​
  ​
