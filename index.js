import { GraphQLServer } from "graphql-yoga";

let links = [
  {
    id: "link-0",
    url: "www.howtographql.com",
    description: "Fullstack tutorial for GraphQL"
  }
];

const typeDefs = `
    type Query{
        info: String!
        feed: [Link]!
    }
    type Mutation{
        create(url: String!, description: String!): Link!
    }
    type Link{
        id: ID!
        description: String!
        url: String!
    }
`;
let idCount = links.length;
const resolvers = {
  Query: {
    info: () => `GraphQL Crud`,
    feed: () => links
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
  typeDefs,
  resolvers
});

server.start(() => console.log("Server is runnign on port 4000"));
