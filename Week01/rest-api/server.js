const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

const accessControl = (req, res, next) => {
  next();
};

app.use(cors());
app.use(accessControl);
app.use(express.json());
app.use(bodyParser.json());

// const movieList = [
//   {
//     id: 10001,
//     name: "die hard",
//     year: "1999",
//     genre: "action",
//     income: 10000000,
//   },
//   {
//     id: 10002,
//     name: "matrix",
//     year: "1999",
//     genre: "action",
//     income: 20000000,
//   },
//   {
//     id: 10003,
//     name: "terminator",
//     year: "1996",
//     genre: "action",
//     income: 30000000,
//   },
// ];

// const rentList = [
//   {
//     movieId: 10002,
//     duration: 10,
//     person: "Kemal",
//   },
//   {
//     movieId: 10002,
//     duration: 20,
//     person: "Ali",
//   },
// ];

// app.get("/", (req, res, next) => {
//   res.json(movieList);
// });

// app.get("/:id", (req, res, next) => {
//   res.json(movieList);
// });

// app.post("/", (req, res, next) => {
//   const veri = req.body;
//   movieList.push(veri);

//   res.send(movieList);
// });

const movieRouter = require("./routes/movies");
const rentRouter = require("./routes/rents");
app.use("/movies", movieRouter);
app.use("/rents", rentRouter);

app.listen(PORT, (req, res, next) => {
  console.log("Server started at " + PORT);
});
