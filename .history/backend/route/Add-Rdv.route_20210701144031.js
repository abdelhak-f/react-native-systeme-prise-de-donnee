const express = require('express');
const router =  express.Router();
const { postRdv, getrdv } = require('../controller/Rdv.controller')




router.post("/postrdv", postRdv);

router.get("/getrdv", getrdv);





module.exports =router;