import movies from "./db";
const resolvers = {
  Query: {
    movies: (obj, args) => {
      if (args.hasOwnProperty("seen")) {
        const filteredMovies = movies.filter(movie => movie.seen === args.seen);
        return filteredMovies;
      } else {
        return movies;
      }
    },
    movie: (obj, { id }) => {
      const filteredMovies = movies.filter(movie => id === movie.id);
      if (filteredMovies[0]) return filteredMovies[0];
    }
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
