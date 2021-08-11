var router = require('express').Router();
var express = require('express');
var app= express();
var cors = require('cors');

app.use(cors())

const tutorRouter = require('./tutors');
router.use('/data',tutorRouter);

module.exports = router;
