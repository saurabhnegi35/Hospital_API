const express = require('express');
const DoctorController = require('../controllers/doctor');
const router = express.Router();

router.post('/register', DoctorController.register);
router.post('/login', DoctorController.createSession);

module.exports = router;
