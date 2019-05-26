let express = require("express");
let router = require("./DataSiswa");

let app = express();
let port = process.env.PORT || 8080;


app.get('/',(req,res) => res.send("Selamat Datang di Data center indonesia"));
app.use('/DataSiswa', router);

app.listen(port, function(){
    console.log("running", port);
})