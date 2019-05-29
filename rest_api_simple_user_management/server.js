const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./apiRouter");

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/user", {
  useNewUrlParser: true,
  useCreateIndex: true
});

app.use("/api", router);
app.get("/", (req, res) => res.json("API"));

app.listen(port, () => {
  console.log("Runiing on ", port);
});
