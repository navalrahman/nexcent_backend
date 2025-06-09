const express = require('express');
const { getAllLogos, editLogos } = require('../../controller/thumbnailtwoController/thhumbnailtwoController');

const { verifyToken } = require('../../config/verifyToken')

const route = express.Router();

route.use(verifyToken)
route.get('/alllogos', getAllLogos)
route.put('/logos/:id', editLogos)

module.exports = route