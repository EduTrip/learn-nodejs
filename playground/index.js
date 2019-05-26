let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let router = require("./apiRouter");

//initialize
let app = express();

//bodyparser configuration
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

//mongoose configuration
mongoose.connect('mongodb://localhost/node-playground');
let db = mongoose.connection;

//setup server 
let port = process.env.PORT || 8080;

//send message specified 'route'?
app.use('/api', router);

//send message for default URL
app.get('/', (req, res) => res.send("Hello from express"));

//launch app from specified port
app.listen(port, function() {
    console.log("running", port);
})

