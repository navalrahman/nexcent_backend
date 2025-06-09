const { getData, editDataOne } = require("../../services/thumbnailfourService/thumbnailfourService.js");


const getAllData = async (req, res) => {
    try {
        const result = await getData();
        console.log(result);

        return res.status(200).json({ message: 'success', data: result })
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: "not found" })
    }
}


const editData = async (req, res) => {
    console.log('sadasfasfas',req.params, req.body);

    try {
        const result = await editDataOne(req.params, req.body)
        return res.status(200).json({ success: true, data: result, message: "updated successfully" })

    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: "something went wrong please try again..." })
    }
}

module.exports = {
    getAllData,
    editData
}