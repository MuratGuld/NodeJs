import * as movieRepository from "../data/movieList-repository.js";

// get (all movies)
export const getMovies = async () => {
  return await movieRepository.getMovies();
};

// get (a movie)
export const getMovie = async (pId) => {
  return await movieRepository.getMovie(pId);
};

// post
export const addMovie = async (pMovie) => {
  return await movieRepository.createMovie(pMovie);
};

// put
export const updateMovie = async (pMovie, pId) => {
  return await movieRepository.updateMovie(pMovie, pId);
};

// delete
export const deleteMovie = async (pId) => {
  return await movieRepository.deleteMovie(pId);
};
