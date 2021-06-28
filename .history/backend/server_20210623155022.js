const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send("Welcome to my page home")
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log("server listening on port " + PORT);
}) ;