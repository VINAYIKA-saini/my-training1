const express = require('express');
const loggermodule = require('../logger/logger')
const helpermodule = require('../util/helper')
const formattermodule =require('../validator/formatter')

const router = express.Router();

router.get('/test-me', function (req, res) {
    
    loggermodule.pqrs()
    helpermodule.xyz()
     helpermodule.xyz1()
    helpermodule.xyz2()
    formattermodule.trim()
    formattermodule.changetoLowerCase()
    formattermodule.changetoUpperCase()


    res.send('My first ever api!')
});




module.exports = router;
// adding this comment for no reason