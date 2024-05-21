const express = require("express");
const router = express.Router();
const {createEvent, getEvents, getEventByID} = require('../controllers/eventController.js');

router.route('/').post(createEvent).get(getEvents);
router.route('/:id').get(getEventByID);

module.exports= router;
