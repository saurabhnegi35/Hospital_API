const express = require('express');
const PatientController = require('../controllers/patient');
const ReportController = require('../controllers/report');
const passport = require('passport');
const router = express.Router();

router.post(
  '/register',
  passport.authenticate('jwt', { session: false }),
  PatientController.register
);

// router.post(
//   '/:id/create-report',
//   passport.authenticate('jwt', { session: false }),
//   PatientController.createReport
// );

// router.post(
//   '/:id/all-report',
//   passport.authenticate('jwt', { session: false }),
//   PatientController.allReports
// );

router.post(
  '/:id/create_report',
  passport.authenticate('jwt', { session: false }),
  ReportController.create
);

router.get(
  '/:id/all_reports',
  passport.authenticate('jwt', { session: false }),
  ReportController.findAllReports
);

module.exports = router;
