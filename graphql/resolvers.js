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

export default resolvers;
