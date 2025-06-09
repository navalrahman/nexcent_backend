
const { data, logos, rightIcon, associationDetails, secondThumbnail, thirdThumbnail, fourthThumbnail, imageshumbnail, logosAndImages } = require('../services/pictureServices.js')

const getData = async (req, res) => {
    try {
        const result = await data()
        return res.status(200).json({ success: true, data: result })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

const getLogos = async (req, res) => {
    try {
        const result = await logos()
        return res.status(200).json({ success: true, data: result })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

const getIconRight = async (req, res) => {
    try {
        const result = await rightIcon()
        return res.status(200).json({ success: true, data: result })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

const getAssociationDetails = async (req, res) => {
    try {
        const result = await associationDetails()
        return res.status(200).json({ success: true, data: result })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}


const getSecondthumbnail = async (req, res) => {
    try {
        const result = await secondThumbnail()
        return res.status(200).json({ success: true, data: result })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

const getThirdthumbnail = async (req, res) => {
    try {
        const result = await thirdThumbnail()
        return res.status(200).json({ success: true, data: result })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

const getFourththumbnail = async (req, res) => {
    try {
        const result = await fourthThumbnail()
        return res.status(200).json({ success: true, data: result })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

const getImages = async (req, res) => {
    try {
        const result = await imageshumbnail()
        return res.status(200).json({ success: true, data: result })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

const getLogosAndImage = async (req, res) => {
    try {
        const result = await logosAndImages()
        return res.status(200).json({ success: true, data: result })
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
}

module.exports = {
    getData,
    getLogos,
    getIconRight,
    getAssociationDetails,
    getSecondthumbnail,
    getThirdthumbnail,
    getFourththumbnail,
    getImages,
    getLogosAndImage
}