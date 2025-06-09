const { data, editData } = require("../../services/thumbnailoneService/thumbnailoneServce")


const getData = async (req, res) => {
    try {
        const result = await data()
        return res.status(200).json({ success: true, data: result })
    } catch (error) {
        return res.status(404).json({ message: "not found" })
    }
}


const getDataToEdit = async (req, res) => {
    console.log("body",req.body);
    
    try {
        const result = await editData(req.params, req.body)
        // console.log(result, 'result');

        return res.status(200).json({ success: true, data: result, message: "updated successfully" })
    } catch (error) {
        return res.status(404).json({ message: "not found" })
    }
}

module.exports = {
    getData,
    getDataToEdit
}