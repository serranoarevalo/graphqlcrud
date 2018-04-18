import { GraphQLServer } from "graphql-yoga";

let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];

let idCount = links.length;
const resolvers = {
  Query: {
    movies: () => links
  },
  Mutation: {
    create: (root, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      };
      links.push(link);
      return link;
    }
  }
};

const server = new GraphQLServer({
  typeDefs: "graphql/typeDefs.graphql",
  resolvers
});

server.start(() => console.log("Server is runnign on port 4000"));
