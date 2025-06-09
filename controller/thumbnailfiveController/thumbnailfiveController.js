const { getData, editData } = require("../../services/thumbnailfiveService/thumbnailfiveService");


const getAllData = async (req, res) => {
    try {
        const result = await getData()
        return res.status(200).json({ message: 'success', data: result })
    } catch (error) {
        console.log(error);
        return res.status(404).josn({ mesage: 'not found', error: error })
    }
}

const getEditData = async (req, res) => {
    // console.log(req.params, req.body);

    try {
        const result = await editData(req.params, req.body)
        return res.status(200).json({ message: 'success', data: result })
    } catch (error) {
        console.log(error);
        return res.status(404).josn({ mesage: 'not found', error: error })
    }
}

module.exports = {
    getAllData,
    getEditData
}