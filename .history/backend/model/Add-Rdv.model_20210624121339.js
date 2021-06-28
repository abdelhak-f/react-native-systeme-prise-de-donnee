const mongoose = require('mongoose')

const RdvSchema = new mongoose.Schema({
    num_rdv : String,
    heure_rdv : String,
    date_rdv : String,
})

module.exports = mongoose.model("Rdv", RdvSchema)