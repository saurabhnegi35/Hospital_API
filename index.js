const express = require('express');
const port = process.env.PORT || 2000;
const db = require('./config/mongoose');

const app = express();


app.listen(port, ()=> {
    console.log(`Server is Up and Running at Port ${port}`);
});
