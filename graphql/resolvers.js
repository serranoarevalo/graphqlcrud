import movies from "./db";
const resolvers = {
  Query: {
    movies: () => movies
  },
  Mutation: {
    create: (root, args) => {
      const { title, year, description, seen } = args;
      const movie = {
        id: `${movies.length++}`,
        title,
        year,
        description,
        seen
      };
      movies.push(movie);
      return movie;
    }
  }
};

export default resolvers;
