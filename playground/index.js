let express = require("express");

let router = require("./apiRouter");

//initialize
let app = express();

//setup server 
var port = process.env.PORT || 8080;

//send message specified 'route'?
app.use('/api', router);

//send message for default URL
app.get('/', (req, res) => res.send("Hello from express"));

//launch app from specified port
app.listen(port, function() {
    console.log("running", port);
})

