const mongoose = require('mongoose')
const RdvSchema = new mongoose.Schema({
    name : String,
    email : String,
    phone : String,
    picture : String,
    salary : String,
    position : String,
})

mongoose.model("employee",RdvSchema)