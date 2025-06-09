const express = require('express')
const { getAllData, getEditData } = require('../../controller/thumbnailfiveController/thumbnailfiveController')
const { verifyToken } = require('../../config/verifyToken')

const route = express.Router()

route.use(verifyToken)
route.get('/alldata', getAllData)
route.put('/update/:id', getEditData)

module.exports = route