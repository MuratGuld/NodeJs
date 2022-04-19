const express = require("express");
router = express.Router();
const movieList = require("../service/movieList.json");
const rentList = require("../service/rentList.json");
const fs = require("fs");

const path =
  "C:/Users/User/Desktop/NodeJs/Week01/rest-api/service/movieList.json";

router.get("/", (req, res) => {
  res.send(movieList);
});

router.get("/:id", (req, res) => {
  const movie = movieList.movies.filter(
    (movie) => movie.id == req.params.id
  )[0];

  res.send(movie);
});

router.post("/", (req, res) => {
  const newMovie = req.body;

  movieList.movies.push(newMovie);
  fs.writeFile(path, JSON.stringify(movieList, null, 2), (err) => {
    if (err) {
      console.log("HATA ", err);
    }
  });

  res.send(movieList);
});

router.put("/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const updatedMovieList = movieList.movies.map((movie) => {
    if (movie.id == id) {
      return (movie = { ...movie, ...req.body });
    } else {
      return movie;
    }
  });

  fs.writeFile(
    path,
    JSON.stringify(
      {
        movies: updatedMovieList,
      },
      null,
      2
    ),
    (err) => {
      if (err) {
        console.log("HATA ", err);
      }
    }
  );

  res.send({
    movies: updatedMovieList,
  });
});

router.delete("/:id", (req, res) => {
  const updatedMovieList = movieList.movies.filter(
    (movie) => movie.id != req.params.id
  );

  fs.writeFile(
    path,
    JSON.stringify(
      {
        movies: updatedMovieList,
      },
      null,
      2
    ),
    (err) => {
      if (err) {
        console.log("HATA ", err);
      }
    }
  );

  res.send({
    movies: updatedMovieList,
  });
});

module.exports = router;
