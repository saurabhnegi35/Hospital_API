const Report = require('../models/report');
const Patient = require('../models/patient');

//create new report
module.exports.create = async function (req, res) {
  try {
    if (req.body.status == undefined) {
      return res.status(206).json({
        message: 'Incomplete data provided',
      });
    }
    let reportCreated = await Report.create({
      doctor: req.user._id,
      status: req.body.status,
      patient: req.params.id,
    });
    let patient = await Patient.findById(req.params.id);

    patient.reports.push(reportCreated);
    await patient.save();

    //POPULATE FUNCTION DO NOT WORK WITH CREATE..THEREFORE WE FIRST FIND THE JUST CREATED REPORTED AND
    // THEN POPULATE ITS DOCTOR FIELD
    let reportFound = await Report.findById(reportCreated._id).populate(
      'doctor'
    );

    return res.status(200).json({
      message: 'Report created for the patient.',
      data: {
        createdBy: reportFound.doctor.username,
        status: reportFound.status,
        createdOn: reportFound.createdAt.toDateString(),
        patientDetails: {
          name: patient.name,
          age: patient.age,
          gender: patient.gender,
          phoneNo: patient.phone,
        },
      },
    });
  } catch (err) {
    console.log(err);
    return res.status(401).json({
      message: 'Error',
    });
  }
};

module.exports.findAllReports = async function (req, res) {
  try {
    //FINDING THE PATIENT FIRST..THEN POPULATING ITS REPORTS FIELD AND REPORT'S DOCTOR FIELD.
    let patient = await Patient.findById(req.params.id).populate({
      path: 'reports',
      //sorting the reports from oldest to latest
      options: { sort: { createdAt: 1 } },
      populate: {
        path: 'doctor',
      },
    });

    return res.status(200).json({
      message: 'Found these reports of the concerned patient',
      data: {
        patient: patient,
      },
    });
  } catch (error) {
    console.log('Error Found:', error);
    return res.json(500, {
      message: 'Internal Server Error',
    });
  }
};

//REPORTS BY STATUS ACTION
module.exports.reportsByStatus = async function (req, res) {
  try {
    //FINDING THE REPORT BY STATUS AND POPULATING ITS DOCTOR AND PATIENT FIELD.
    let reports = await Report.find({ status: req.params.status })
      .populate('doctor')
      .populate('patient');

    return res.status(200).json({
      message: 'Reports of patients having status ' + req.params.status,
      data: {
        reports: reports,
      },
    });
  } catch (error) {
    console.log('Error Found:', error);
    return res.json(500, {
      message: 'Internal Server Error',
    });
  }
};
