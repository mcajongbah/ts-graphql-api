require("dotenv").config();
import "reflect-metadata";
import { ApolloServer } from "apollo-server-express";
import Express from "express";
import { buildSchema } from "type-graphql";
import { createConnections } from "typeorm";
import { userResolver } from './resolvers/users/userResolver'


const main = async () => {
  await createConnections()


  const schema = await buildSchema({
    resolvers: [userResolver],
  });

  const apolloServer = new ApolloServer({ schema });

  const app = Express();

  apolloServer.applyMiddleware({ app });

  app.listen(4000, () => {
    console.log("server started on http://localhost:4000/graphql");
  });
};

main();