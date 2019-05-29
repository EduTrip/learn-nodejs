const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const router = require('./api-routes');

const app = express();

const port = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/mahasiswa", {
  useNewUrlParser: true,
  useFindAndModify: false
});

app.use('/api', router);
app.get('/', (req, res) => res.json('express api'));

app.listen(port, () => {
  console.log("Running on ", port);
});
