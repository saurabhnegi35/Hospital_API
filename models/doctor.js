// defining doctor schema and exporting models to use
const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema(
  {
    username: {
      //name of doctor
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
