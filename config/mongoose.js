const mongoose = require('mongoose');
var dotenv = require('dotenv');

dotenv.config();

mongoose.set('strictQuery', true);

mongoose.connect(
  process.env.MONGOLAB_URI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } /*|| 'mongodb://localhost/HospitalAPI'*/
);

const db = mongoose.connection;

db.on('error', console.error.bind('error', 'console'));

db.once('open', function () {
  console.log('Connected to Database :: MongoDB');
});
module.exports = db;
