import bodyParser from "body-parser";
import express from "express";
import cors from "cors";

const app = express();

const PORT = 5000;

const accessControl = (req, res, next) => {
  next();
};

app.use(cors());
app.use(accessControl);
app.use(express.json());
app.use(bodyParser.json());

import { router as movieRouter } from "./routes/movies.js";
import { router as rentRouter } from "./routes/rents.js";
app.use("/movies", movieRouter);
app.use("/rents", rentRouter);

app.listen(PORT, (req, res, next) => {
  console.log("Server started at " + PORT);
});
