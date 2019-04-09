const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const admin_controller = require('../controller/admin.controller');
const subuser_controller= require('../controller/subusers.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', admin_controller.test);

router.post('/register', admin_controller.admin_create);

router.post('/auth', admin_controller.admin_auth);

router.post('/subuser',subuser_controller.subUser_create);

router.get('/subuser',subuser_controller.subUser_getdata);

module.exports = router;