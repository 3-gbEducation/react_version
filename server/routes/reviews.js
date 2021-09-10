var router = require('express').Router();
var reviewsModel = require('../models/reviewsModel')
var express = require('express');
var cors = require('cors');
var app = express();

app.use(cors())

var corsOptions = {
    origin: 'http://localhost:5000/',
    optionsSuccessStatus: 200
  }

router.get('/studs',cors(corsOptions),(req,res)=>{
      reviewsModel.getStudentReviews(data=>{
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

router.get('/ttrs',cors(corsOptions),(req,res)=>{
    reviewsModel.getTutorReviews(data=>{
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