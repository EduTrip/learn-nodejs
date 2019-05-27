const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require("./apiRouter.js");

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/siswa", {
  useNewUrlParser: true
});
let db = mongoose.connection;

app.use('/api', router);
app.get("/", (req, res) => res.json("Express Api"));

app.listen(port, () => {
  console.log("running on ", port);
});
