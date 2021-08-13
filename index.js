const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 5000;


<<<<<<< Updated upstream
=======
const indexRouter = require('./server/routes/index');
app.use('/data',indexRouter);
>>>>>>> Stashed changes

var mode;
if (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') {
    // dev code
    mode = 'Development Mode';
} else {
    // production code
    mode='Production Mode';
}

app.listen(port, () => console.log(`Listening on port ${port} in ${mode}`));
