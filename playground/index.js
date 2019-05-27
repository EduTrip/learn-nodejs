const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const router = require("./contact.router");
const config = require("./config.js");

//initialize
let app = express();

//bodyparser configuration
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

//mongoose configuration
mongoose
  .connect(config.dbUrl, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log("Successfuly connect Database");
  })
  .catch(err => {
    console.log(err);
    process.exit();
  });

//setup server
// let port = process.env.PORT || 8080;

//send message specified 'route'?
app.use("/api", router);

//send message for default URL
app.get("/", (req, res) => res.json("Hello from express"));

//launch app from specified port
app.listen(config.serverPort, function() {
  console.log("running on ", config.serverPort);
});
