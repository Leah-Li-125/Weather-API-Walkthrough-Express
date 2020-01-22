const express = require("express");
const weatherRoutes = require("./routes/weather");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Welcome");
});

//2.2 (cont'd) all routes starting from /api/weather call weatherRoutes
router.use("/api/weather", weatherRoutes);

module.exports = router;
