const movieList = [
  {
    id: 10002,
    name: "Saw",
    year: "2004",
    genre: "horror",
    income: 10000000,
  },
  {
    id: 10003,
    name: "Terminator",
    year: "1996",
    genre: "action",
    income: 30000000,
  },
  {
    id: 10004,
    name: "Matrix",
    year: "2001",
    genre: "action",
    income: "80000000",
  },
];

// get
export const getMovieList = async () => {
  return await movieList;
};

// post
export const createMovie = async (pMovie) => {
  movieList.push(pMovie);
  return await movieList;
};

// put
export const updateMovie = async (pMovie, pId) => {
  const foundIndex = movieList.findIndex((movie) => movie.id == pId);
  movieList[foundIndex] = { ...movieList[foundIndex], ...pMovie };
  return await movieList;
};

//delete
export const deleteMovie = async (pId) => {
  const foundIndex = movieList.findIndex((movie) => movie.id == pId);
  movieList.splice(foundIndex, 1);
  return await movieList;
};