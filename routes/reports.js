const express = require('express');
const passport = require('passport');

const router = express.Router();
const ReportController = require('../controllers/report');

//PATIENT ROUTES AND ALL ARE PROTECTED..(ONLY DOCTORS CAN ACCESS THESE ROUTES)
router.get(
  '/:status',
  passport.authenticate('jwt', { session: false }),
  ReportController.reportsByStatus
);

module.exports = router;
