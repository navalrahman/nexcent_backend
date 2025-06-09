
const { getData, editItem } = require('../../services/thumbnailsevenService/thumbnailsevenService.js')

const getAllData = async (req, res) => {
    try {
        const result = await getData();
        return res.status(200).json({ message: "success", data: result })
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: "not found" })
    }
}

const editData = async (req, res) => {
    try {
        const result = await editItem(req.params, req.body)
        return res.status(200).json({ message: "success", data: result })
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: "notfound" })
    }
}

module.exports = {
    getAllData,
    editData
}