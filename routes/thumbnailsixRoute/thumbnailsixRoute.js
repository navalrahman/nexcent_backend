const express = require('express');
const { getAllData, editData } = require('../../controller/thumbnailsixController/thumbnailsixController');
const { verifyToken } = require('../../config/verifyToken');

const route = express.Router()

route.use(verifyToken)
route.get('/alldata', getAllData)
route.put('/update/:id', editData)

module.exports = route