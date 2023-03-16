const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },

    age: {
      type: Number,
      required: true,
    },

    gender: {
      type: String,
      enum: ['MALE', 'FEMALE'],
      required: true,
    },

    reports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Report',
      },
    ],
  },
  {
    timestamps: true,
  }
);

const Patient = mongoose.model('Patient', patientSchema);
module.exports = Patient;
