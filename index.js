const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const sessions = require('./data/sessions.json');
const typeDefs = require('./types/index.js');
const resolvers = require('./resolvers/query.js');
const PropertiesAPI = require('./datasources/properties.js');

(async() => {
const app = express();

const dataSources = () => ({
    propertiesAPI: new PropertiesAPI(),

  });
const server = new ApolloServer({ typeDefs,resolvers,dataSources});
await server.start();

 server.applyMiddleware({ app, path:"/graphql" });

/** Please remove me line 11-14 **/
// app.get('*', (req, res, next) => {
//     res.send("Good luck! 😀")
// });

app.listen({ port: 4000 }, () =>
    console.log(`Listening on http://localhost:4000/graphql`)
);
})();