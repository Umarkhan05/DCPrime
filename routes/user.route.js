const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/user.controller');


router.get('/users', user_controller.getuser);
router.post('/users', user_controller.createuser);
router.post('/users/login', user_controller.login);


module.exports = router;