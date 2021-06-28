const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

const addrdvRouter = require('./route/Add-Rdv.route');


const app = express();

const mongURI = "mongodb+srv://Italy:zwHXLs8HBHNWQsfA@cluster0-xu5et.mongodb.net/test?retryWrites=true&w=majorit"
mongoose.connect(mongURI,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

mongoose.connection.on("connected",() =>{
    console.log("Connect Success")
})

mongoose.connection.on("error",(err) =>{
    console.log("error",error)
})




app.get('/', function(req, res){
    res.send("Welcome to my page home")
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log("server listening on port " + PORT);
}) ;