const express = require('express');
const phoneController = require('../controllers/phoneController');

const router = express.Router();
router.post("/save-phone", phoneController.phone);
router.get("/get-phone", phoneController.getPhone);
module.exports = router;