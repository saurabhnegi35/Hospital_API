const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema(
  {
    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: 'Doctor',
    },
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Patient',
    },
    status: {
      type: String,
      required: true,
      enum: [
        'NEGATIVE',
        'TRAVELLED-QUARANTINE',
        'SYMPTOMS-QUARANTINE',
        'POSITIVE-ADMIT',
      ],
    },
  },
  {
    timestamps: true,
  }
);

const Report = mongoose.model('Report', reportSchema);
module.exports = Report;
