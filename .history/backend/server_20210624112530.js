const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

const addrdvRouter = require('./route/Add-Rdv.route');

const app = express();
app.use(cors());

mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("mongodb is connected");
  })
  .catch((err) => {
    console.log(err.message);

  });

app.use(express.json());

app.use("/", addrdvRouter);



app.get('/', function(req, res){
    res.send("Welcome to my page home")
});

const PORT = 8080;
app.listen(PORT, function(){
    console.log("server listening on port " + PORT);
}) ;