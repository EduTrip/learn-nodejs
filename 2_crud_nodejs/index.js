let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let router = require("./apiRouter");
let app = express();

let port = process.env.PORT || 8080;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

mongoose.connect("mongodb://localhost/siswaDB");
let db = mongoose.connection;

app.use('/api', router);

app.get('/', (req, res) => res.send("Api"));

app.listen(port, function() {
  console.log("running", port);
});
