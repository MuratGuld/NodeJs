import db from "../commons/database.js";

// get all movies
export const getMovies = async () => {
  return await db.query(`SELECT * FROM movies`);
};

// get a movie
export const getMovie = async (pId) => {
  return await db.query(`SELECT * FROM movies WHERE id=${pId}`);
};

// post
export const createMovie = async (pMovie) => {
  return await db.query(`INSERT 
  INTO movies 
  VALUES(null, '${pMovie.name}', ${pMovie.year}, '${pMovie.genre}', ${pMovie.income})`);
};

// put
export const updateMovie = async (pMovie, pId) => {
  return await db.query(`UPDATE movies  
  SET name = '${pMovie.name}',
      year = ${pMovie.year},
      genre = '${pMovie.genre}',
      income = ${pMovie.income}
  WHERE id=${pId}`);
};

//delete
export const deleteMovie = async (pId) => {
  return await db.query(`DELETE FROM movies where id=${pId}`);
};
