const express = require("express");
const router = express.Router();
const axios = require("axios");

//2.2 copy code in routes.js regarding fetching data from api to this /routes/weather.js
//then go back to routes.js to import this weatherRoutes
router.get("/:cc/:city", (req, res) => {
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

module.exports = router;
