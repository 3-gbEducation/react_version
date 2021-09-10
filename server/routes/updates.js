var router = require('express').Router();
var updateModel= require('../models/updateModel')
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors())

var corsOptions = {
    origin: 'http://localhost:5000/',
    optionsSuccessStatus: 200
  }

router.get('/latest',cors(corsOptions),(req,res)=>{
      updateModel.getUpdates(data=>{
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