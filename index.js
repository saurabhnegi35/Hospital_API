const express = require('express');
const port = process.env.PORT || 2000;
const db = require('./config/mongoose');
const routes = require('./routes/index');
const passport = require('passport');
const passportJWT = require('./config/passport-jwt-strategy');

const app = express();

// app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is Up and Running at Port ${port}`);
});
