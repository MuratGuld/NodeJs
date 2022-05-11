import Movie from "../models/MovieModel.js";

// get all movies
export const getMovies = async () => {
  return await Movie.findAll();
};

// get a movie
export const getMovie = async (pId) => {
  return await Movie.findByPk(pId);
};

// post
export const createMovie = async (pMovie) => {
  return await Movie.create(pMovie);
}

// put
export const updateMovie = async (pMovie, pId) => {
  return await Movie.update(pMovie, {
    where: {id: pId}
  });
}

//delete
export const deleteMovie = async (pId) => {
  return await Movie.destroy({
    where: {id: pId}
  });
};
