const express = require('express');
const router =  express.Router();
const {postRdv } = require('../controller/Rdv.controller')




router.post("/postrdv", postRdv);