const mongoose = require('mongoose')
const RdvSchema = new mongoose.Schema({
    num_rdv : String,
    lname : String,
    ph : String,
    picture : String,
    salary : String,
    position : String,
})

mongoose.model("rendezvous",RdvSchema)