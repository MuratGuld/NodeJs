import express from "express";
const router = express.Router();
import rentList from "../rentList-repository.js";

router.get("/", (req, res) => {
  res.send(rentList);
});

router.post("/", (req, res) => {
  const newRent = req.body;

  rentList.push(newRent);

  res.send(rentList);
});

export { router };
