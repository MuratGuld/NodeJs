export const getMovieList = async () => {
  try {
    const response = await fetch("http://localhost:5000/movies");
    return await response.json();
  } catch (error) {
    console.log(error);
  }
};
