var router = require('express').Router();
var express = require('express');

const tutorRouter = require('./tutors');
router.use('/data',tutorRouter);

module.exports = router;
