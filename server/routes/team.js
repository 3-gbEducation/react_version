var router = require('express').Router();
var teamModel = require('../models/teamModel');
// var express = require('express');


router.get('/list', (req, res) => {
    teamModel.getTeamData(data => {
        if (data.length > 0) {
            res.json({
                "success": true,
                data
            })
        }
        else {
            res.json({
                "success": false,
                "message": "data not fetched"
            })
        }
    })
})

module.exports = router;