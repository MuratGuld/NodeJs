import * as movieRepository from "../data/movieList-repository.js";

// get (all movies)
export const getMovies = async () => {
  const movies = await movieRepository.getMovieList();
  
  return await movies;
};

// get (a movie)
export const getMovie = async (pId) => {
  const movies = await movieRepository.getMovieList();
  const movie = await movies.find((mov) => mov.id == pId);
  
  return await movie;
};

// post 
export const addMovie = async (pMovie) => {
  const movies = await movieRepository.createMovie(pMovie);
  
  return await movies;
};

// put 
export const updateMovie = async (pMovie, pId) => {
  const movies = await movieRepository.updateMovie(pMovie, pId);
  
  return await movies;
};

// delete
export const deleteMovie = async (pId) => {
  const movies = await movieRepository.deleteMovie(pId);
  
  return await movies;
};