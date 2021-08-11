const express = require('express');
// const axios = require('axios');
const app = express();
const port = 5000;

// const indexRouter = require('./server/routes/index');
// app.use('/backend',indexRouter);

app.get('/tutorslist', (req, res) => {
    const user = req.body;
    res.json({
        data: "Hello there!"
    })
})

app.get('/hello', (req, res) => {
    res.json({
        "message": "hi"
    })
})

app.listen(5000, () => {
    console.log('Server is listening on port 5000 currently...')
});
