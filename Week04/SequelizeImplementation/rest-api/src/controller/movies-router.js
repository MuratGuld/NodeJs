import express from "express";
const router = express.Router();
import * as movieService from "../service/movie-services.js";

// GET all movies
router.get("/", async (req, res) => {
  const movies = await movieService.getMovies();
  res.status(200).send(movies);
});

// GET a movie by id
router.get("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const movie = await movieService.getMovie(id);

  res.status(200).send(movie);
});

// ADD a movie
router.post("/", async (req, res) => {
  const movie = req.body;
  const newMovie = await movieService.addMovie(movie);

  res.status(201).send(newMovie);
});

// UPDATE a movie by id
router.put("/:id", async (req, res) => {
  const id = Number(req.params.id);
  const movie = req.body;
  const updatedMovie = await movieService.updateMovie(movie, id);

  res.status(200).send(updatedMovie);
});

// DELETE a movie by id
router.delete("/:id", async (req, res) => {
  const id = Number(req.params.id);
  await movieService.deleteMovie(id);

  res.status(200).send(null);
});

export { router };
