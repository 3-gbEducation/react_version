var router = require('express').Router();
var tutorModel = require('../models/tutorModel');
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors())

var corsOptions = {
    origin: 'http://localhost:5000/',
    optionsSuccessStatus: 200 
  }

router.get('/list',cors(corsOptions),(req,res)=>{
      tutorModel.getTutorData(data=>{
        if(data.length > 0){
            res.json({
                "success" : true,
                data
            })
        }
        else{
            res.json({
                "success" : false,
                "message" : "data not fetched"
            })
        }
})
})

module.exports = router;