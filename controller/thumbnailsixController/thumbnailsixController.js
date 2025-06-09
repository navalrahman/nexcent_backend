const { getData } = require("../../services/thumbnailsixService/thumbnailsixService");


const getAllData = async (req, res) => {

    try {
        const result = await getData();
        return res.status(200).json({ message: "success", data: result })
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: 'not found' })
    }

}

const editData = async (req, res) => {
    try {
        const result = await edit(req.params, req.body);
        return res.status(200).json({ message: "success", data: result })
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: 'not found' })
    }
}

module.exports = {
    getAllData,
    editData
}