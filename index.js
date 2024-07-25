const { JSON_BOOKS } = require("./constants/common");

const express = require("express"),
  PORT = 5001,
  app = express();

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  next();
});

app.get("/books", (req, res) => {
  res.send(JSON_BOOKS);
});

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`));
