const express = require('express');
const router =  express.Router();
const { postRdv, getRdv } = require('../controller/Rdv.controller')




router.post("/postrdv", postRdv);

router.get("/getrdv", getRdv);




module.exports =router;