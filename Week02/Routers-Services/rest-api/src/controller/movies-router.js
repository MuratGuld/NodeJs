import express from "express";
const router = express.Router();
import * as movieService from "../service/movie-services.js";

// GET all movies
router.get("/", async (req, res) => {
  const movieList = await movieService.getMovies();
  res.status(200).send(movieList);
});

// GET a movie by id
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const movie = await movieService.getMovie(id);

  res.status(200).send(movie);
});

// ADD a movie
router.post("/", async (req, res) => {
  const newMovie = req.body;
  const movieList = await movieService.addMovie(newMovie);

  res.status(201).send(movieList);
});

// UPDATE a movie by id 
router.put("/:id", async (req, res) => {
  const updatedId = Number(req.params.id);
  const updatedMovie = req.body;
  const movieList = await movieService.updateMovie(updatedMovie, updatedId);

  res.status(200).send(movieList);
});

// DELETE a movie by id
router.delete("/:id", async (req, res) => {
  const deletedId = Number(req.params.id);
  const movieList = await movieService.deleteMovie(deletedId);

  res.status(200).send(movieList);
});

export { router };
