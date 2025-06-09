const express = require('express');
const { getAllAssociation, EditAssociationData } = require('../../controller/thumbnailthreeController/thumbnailthreeController.js');
const { verifyToken } = require('../../config/verifyToken')

const route = express.Router()
route.use(verifyToken)
route.get('/association', getAllAssociation)
route.put('/association/:id', EditAssociationData)

module.exports = route;