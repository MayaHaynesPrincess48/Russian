const express = require("express");
const router = express.Router();
const { sendEmail } = require('../controllers/sendEmailController.js')

router.route('/').post(sendEmail);

module.exports = router;
