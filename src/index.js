const express = require("express");
const services = require("./service");
const app = express();
const path = require("path");
const port = 8080;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "app/build")));

app.use((err, req, res, next) => {
  if (req) {
    console.log("Request : ", req.originalUrl);
  }
  if (err) {
    console.log("Exception: ", err);
  }
  next();
});

app.get("/api/", (req, res) => {
  res.send("Welcome to API!");
});

app.get("/api/getList/:name", (req, res) => {
  let result = [];
  services
    .searchBusiness(req.name)
    .then(data => {
      result = data;
      res.send(result);
    })
    .catch(err => {
      res.send("Error ");
    });
});
// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/app/build/index.html"));
});

app.listen(port, () => {
  console.log("Server running at ", port);
});
