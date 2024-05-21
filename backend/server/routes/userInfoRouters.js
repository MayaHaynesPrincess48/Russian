const express = require("express");
const router = express.Router();
var upload = require('./uploadRoutes.js')

const {createUserInfo, getUsers, getUserInfoByID, getUserInfo,updateUserInfo,getUserOne} = require('../controllers/userInfoController.js');

router.route('/').post(upload.single('file'),createUserInfo).get(getUsers);
router.route('/one').get(getUserOne);
router.route('/:id/profile').get(getUserInfo).put(upload.single('file'), updateUserInfo);
router.route('/:id').get(getUserInfoByID);

module.exports= router;
