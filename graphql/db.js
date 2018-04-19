let movies = [
  {
    id: "0",
    title: "The lord of the rings",
    year: 2000,
    description: "Get the ring to mordor",
    seen: true
  }
];

const getMovies = () => movies;

const findMovieById = id => {
  const filteredMovies = movies.filter(movie => id === movie.id);
  return filteredMovies[0];
};

const filteredMovies = seen => {
  const filteredMovies = movies.filter(movie => movie.seen === seen);
  return filteredMovies;
};

const createMovie = (title, year, description, seen) => {
  const movie = {
    id: `${movies.length}`,
    title,
    year,
    description,
    seen
  };
  movies.push(movie);
  return movie;
};

const deleteMovieById = id => {
  const cleanedMovies = movies.filter(movie => id !== movie.id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};

export {
  getMovies,
  findMovieById,
  filteredMovies,
  createMovie,
  deleteMovieById
};

export default movies;
