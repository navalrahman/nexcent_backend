const express = require('express');

const {verifyToken} = require('../../config/verifyToken.js')

const { getData, getDataToEdit } = require('../../controller/thumbnailoneController/thumbnailoneController.js');

const route = express.Router();

route.use(verifyToken)
route.get('/alldata', getData);
route.put('/editdata/:id', getDataToEdit)

module.exports = route;
