
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const _ = require("lodash");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));




let port = process.env.PORT;
if(port== null || port == ""){
    port = 3000;
}

app.get("/",function(req,res){
    res.render("index");
});

app.listen(port, function() {
    console.log("Server started successfully");
  });
  