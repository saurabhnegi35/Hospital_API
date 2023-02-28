const express = require('express');
const router = express.Router();
const ReportController = require('../controllers/report');
const passport = require('passport');

router.get(
  '/:status',
  passport.authenticate('jwt', { session: false }),
  ReportController.reportsByStatus
);

module.exports = router;
