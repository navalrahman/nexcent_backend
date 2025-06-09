
const express = require('express')
const {
    getData,
    getLogos,
    getIconRight,
    getAssociationDetails,
    getSecondthumbnail,
    getThirdthumbnail,
    getFourththumbnail,
    getImages,
    getLogosAndImage
} = require('../controller/pictureController.js');


const router = express.Router();

router.get('/mainthumbnail', getData)
router.get('/logos', getLogos);
router.get('/right', getIconRight);
router.get('/association', getAssociationDetails);
router.get('/secondthumbnail', getSecondthumbnail);
router.get('/thirdthumbnail', getThirdthumbnail);
router.get('/fourththumbnail', getFourththumbnail);
router.get('/images', getImages);
router.get('/getlogosimage', getLogosAndImage)

module.exports = router;