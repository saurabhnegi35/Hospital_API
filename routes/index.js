const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');

// router.get('/', homeController);

router.use('/doctors', require('./doctors'));
router.use('/patients', require('./patients'));
router.use('./report', require('./reports'));

module.exports = router;
