const express = require("express");
const router = express.Router();
const {createPublication, getPublication, getPublicationByID, getPublicationProfile, views, like, unlike, favourite} = require('../controllers/publicationController.js');
const upload = require('./uploadRoutes.js')

router.route('/').post(upload.single('file'),createPublication).get(getPublication);
router.route('/:id/profile').get(getPublicationProfile);
router.route('/:id/view').put(views);
router.route('/:id/like').put(like);
router.route('/:id/unlike').put(unlike);
router.route('/:id/favourites').put(favourite);
router.route('/:id').get(getPublicationByID);

module.exports= router;
