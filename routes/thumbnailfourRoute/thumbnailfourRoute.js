const express = require('express');
const { getAllData, editData } = require('../../controller/thumbnailfourController/thumbnailfourController.js');
const { verifyToken } = require('../../config/verifyToken.js');


const route = express.Router();

route.use(verifyToken)
route.get('/alldata', getAllData)
route.put("/editdata/:id", editData)


module.exports = route