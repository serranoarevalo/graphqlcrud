import {
  getMovies,
  findMovieById,
  filteredMovies,
  createMovie,
  deleteMovieById
} from "./db";
const resolvers = {
  Query: {
    movies: (obj, args) => {
      if (args.hasOwnProperty("seen")) {
        filteredMovies(args.seen);
      } else {
        return getMovies();
      }
    },
    movie: (obj, { id }) => {
      return findMovieById(id);
    }
  },
  Mutation: {
    create: (root, args) => {
      const { title, year, description, seen } = args;
      return createMovie(title, year, description, seen);
    },
    delete: (root, { id }) => {
      return deleteMovieById(id);
    }
  }
};

export default resolvers;
