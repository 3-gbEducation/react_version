var router = require('express').Router();
var tutorModel = require('../models/tutorModel');

router.get('/list',(req,res)=>{
    // const user = req.body;
      tutorModel.getTutorData(data=>{
        if(data){
            res.json({
                "data" : data.data
            })
        }
        else{
            res.json({
                "message" : "successful"
            })
        }
})
})

module.exports = router;