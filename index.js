const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const typeDefs = require('./types/index.js');
const resolvers = require('./resolvers/index');
const PropertiesAPI = require('./datasources/properties.js');
const auth = require("./utils/auth");
(async() => {
const app = express();

const dataSources = () => ({
    propertiesAPI: new PropertiesAPI(),

  });

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context: ({ req }) => {
    let user = null;
    if (req.headers.authorization) {
      const payload = auth.verifyToken(req.headers.authorization);
      user = payload;
    }

    return { user };
  },
});
await server.start();

 server.applyMiddleware({ app, path:"/graphql" });

app.listen({ port: 4000 }, () =>
    console.log(`Listening on http://localhost:4000/graphql`)
);
})();