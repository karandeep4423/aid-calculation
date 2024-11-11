const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.get('/verify-account/:token', authController.verifyAccount);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password/:token', authController.resetPassword);
router.post("/appointment", authController.appointment);
router.post("/appointment-cancel", authController.appointmentCancel);
router.get("/get-user/:userId", authController.getUserData);
module.exports = router;
