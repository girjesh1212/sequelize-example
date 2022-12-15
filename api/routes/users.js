const express = require('express');
const router = express.Router();
const { test, createUser, getUsers } = require('../controllers/userCtrl');

router.get('/test', test);
router.post('/create', createUser);
router.get('/', getUsers);

module.exports = router;
