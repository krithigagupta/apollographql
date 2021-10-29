Step 1 :Invoke signIn mutation and get the JWT Token.
mutation($credentials: Credentials!) {
  signIn(credentials: $credentials) {
    token
  }
}

Variables
{
  "credentials": {
    "email":"user1@sideinc.com",
    "password":"676cfd34-e706-4cce-87ca-97f947c43bd4"
  }
}

Step 2:  GraphQL queries are secured by Bearer authentication. Use request authorization header to pass the token. This will authenticate the user.

query {
  listingsById(city:"Houston") {

  property {
    roof
    
  }
  address {
    city
    crossStreet
    country
  }
}
}