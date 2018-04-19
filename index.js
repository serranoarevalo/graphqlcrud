import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/typeDefs.graphql",
  resolvers
});

server.start(() => console.log("Server is runnign on port 4000"));
