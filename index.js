import { GraphQLServer } from "graphql-yoga";
import db from "./db";

const typeDefs = `
    type Query{
        info: String!
    }
`;

const resolvers = {
  Query: {
    info: () => `GraphQL Crud`
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() => console.log("Server is runnign on port 4000"));
