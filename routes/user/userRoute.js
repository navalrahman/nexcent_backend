const express = require('express');
const { createAccount, loginAccount } = require('../../controller/userController/userController');

const route = express.Router();

route.post('/signup', createAccount)
route.post('/login', loginAccount)

module.exports = route