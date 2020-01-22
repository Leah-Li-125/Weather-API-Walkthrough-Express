const express = require("express");
const routes = require("./routes");

const app = express();

//2.2(cont'd) import routes.js and use routes in index.js
app.use(routes);
// app.use('/api', routes); //if with api in root route, use this code line

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
