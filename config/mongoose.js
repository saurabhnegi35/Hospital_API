const mongoose = require('mongoose');

mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost/HospitalAPI');

const db=mongoose.connection;

db.on('error',console.error.bind('error','console'));

db.once('open',function(){
    console.log('Connected to Database :: MongoDB');

});
module.exports=db