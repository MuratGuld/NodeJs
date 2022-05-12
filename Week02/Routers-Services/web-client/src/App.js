import { useEffect, useState } from "react";
import * as movieListData from "./service/movie.service.js";
import * as rentListData from "./service/rent.service.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  const [movieList, setMovieList] = useState([]);
  const [rentList, setRentList] = useState([]);
  const [movie, setMovie] = useState({
    id: Math.floor(Math.random() * 100000),
    name: null,
    year: null,
    genre: null,
    income: null,
  });
  const [updatedMovie, setUpdatedMovie] = useState({});
  const [rent, setRent] = useState({});

  useEffect(() => {
    getMovieList();
    getRentList();
  }, [movieList]);

  const getMovieList = async () => {
    const movieList = await movieListData.getMovieList();
    setMovieList(movieList);
  };

  const getRentList = async () => {
    const rentList = await rentListData.getRentList();
    setRentList(rentList);
  };

  const movieColumns = movieList[0] && Object.keys(movieList[0]);
  const rentColumns = rentList[0] && Object.keys(rentList[0]);

  const addMovie = async (pMovie) => {
    const result = await fetch("http://localhost:5000/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pMovie),
    });
  };

  const updateMovie = async (pMovie) => {
    const result = await fetch(`http://localhost:5000/movies/${pMovie.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pMovie),
    });
  };

  const handleUpdate = (pMovie) => {
    setUpdatedMovie(pMovie);
  };

  const deleteMovie = async (movieID) => {
    const result = await fetch(`http://localhost:5000/movies/${movieID}`, {
      method: "DELETE",
    });
  };

  const addRent = async (pRent) => {
    const result = await fetch("http://localhost:5000/rents", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pRent),
    });
  };

  return (
    <div className="container mt-4">
      <h1>MOVIE LIST</h1>
      <table className="table">
        <thead>
          <tr>
            {movieList[0] && movieColumns.map((column) => <th>{column}</th>)}
          </tr>
        </thead>
        <tbody>
          {movieList[0] &&
            movieList.map((movie) => (
              <tr>
                {movieColumns.map((column) => (
                  <td>{movie[column]}</td>
                ))}
                <td>
                  <i
                    className="bi bi-pencil-square"
                    onClick={() => handleUpdate(movie)}
                  ></i>
                </td>
                <td>
                  <i
                    className="bi bi-trash3-fill"
                    onClick={() => deleteMovie(movie["id"])}
                  ></i>
                </td>
                <td>
                  <i
                    className="bi bi-key-fill"
                    onClick={() => setRent({ ...rent, movieId: movie.id })}
                  ></i>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="row">
        <form className="col" onSubmit={() => addMovie(movie)}>
          <input
            type="text"
            placeholder="name"
            onChange={(e) => setMovie({ ...movie, name: e.target.value })}
          />
          <br />
          <input
            type="number"
            placeholder="year"
            onChange={(e) => setMovie({ ...movie, year: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="genre"
            onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
          />
          <br />
          <input
            type="number"
            placeholder="income"
            onChange={(e) => setMovie({ ...movie, income: e.target.value })}
          />
          <br />
          <button type="submit">Add New Movie</button>
        </form>
        <form className="col" onSubmit={() => updateMovie(updatedMovie)}>
          <input
            type="text"
            placeholder="name"
            value={updatedMovie.name}
            onChange={(e) =>
              setUpdatedMovie({ ...updatedMovie, name: e.target.value })
            }
          />
          <br />
          <input
            type="number"
            placeholder="year"
            value={updatedMovie.year}
            onChange={(e) =>
              setUpdatedMovie({ ...updatedMovie, year: e.target.value })
            }
          />
          <br />
          <input
            type="text"
            placeholder="genre"
            value={updatedMovie.genre}
            onChange={(e) =>
              setUpdatedMovie({ ...updatedMovie, genre: e.target.value })
            }
          />
          <br />
          <input
            type="number"
            placeholder="income"
            value={updatedMovie.income}
            onChange={(e) =>
              setUpdatedMovie({ ...updatedMovie, income: e.target.value })
            }
          />
          <br />
          <button type="submit">Update Movie</button>
        </form>
        {/* asd */}
        <form className="col" onSubmit={() => addRent(rent)}>
          <input type="number" placeholder="movieId" value={rent.movieId} />
          <br />
          <input
            type="number"
            placeholder="duration"
            onChange={(e) => setRent({ ...rent, duration: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="person"
            onChange={(e) => setRent({ ...rent, person: e.target.value })}
          />
          <br />
          <button type="submit">Rent Movie</button>
        </form>
        {/* asd */}
        <div className="col">
          <h1>RENT LIST</h1>
          <table className="table">
            <thead>
              <tr>
                {rentList[0] && rentColumns.map((column) => <th>{column}</th>)}
              </tr>
            </thead>
            <tbody>
              {rentList[0] &&
                rentList.map((rent) => (
                  <tr>
                    {rentColumns.map((column) => (
                      <td>{rent[column]}</td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
