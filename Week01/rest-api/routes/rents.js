const express = require("express");
router = express.Router();
const movieList = require("../service/movieList.json");
const rentList = require("../service/rentList.json");
const fs = require("fs");

const path =
  "C:/Users/User/Desktop/NodeJs/Week01/rest-api/service/rentList.json";

router.get("/", (req, res) => {
  res.send(rentList);
});

router.post("/", (req, res) => {
  const newRent = req.body;
  
  rentList.rents.push(newRent);
  fs.writeFile(path, JSON.stringify(rentList, null, 2), (err) => {
    if (err) {
      console.log("HATA ", err);
    }
  });

  res.send(rentList);
});

module.exports = router;
