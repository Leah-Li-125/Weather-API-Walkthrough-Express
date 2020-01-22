const express = require("express");

const router = express.Router();

//2.1 copy the routes in index.js and paste here, then replace app.get to router.get

router.get("/", (req, res) => {
  res.send("Welcome");
});

router.get("/api/weather/:cc/:city", (req, res) => {
  const { cc, city } = req.params;
  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${cc}&APPID=64bfcade25a3891088c755f505757b7f`
    )
    .then(response => {
      res.send(response.data);
    })
    .catch(err => console.log(err));
});
