const express = require('express')

const { getimages, editimages } = require('../../controller/thumbnaileightController/thumbnaileightController')
const { verifyToken } = require('../../config/verifyToken')


const router = express.Router()

router.use(verifyToken)
router.get('/images', getimages)
router.put('/edits/:id', editimages)

module.exports = router