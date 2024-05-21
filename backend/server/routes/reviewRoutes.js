const express = require("express");
const router = express.Router();
const {createReview, getReviews, getReviewByID} = require('../controllers/reviewController.js');
const upload = require('./uploadRoutes.js')

router.route('/').post(upload.single('file'),createReview).get(getReviews);
router.route('/:id').get(getReviewByID);

module.exports= router;
