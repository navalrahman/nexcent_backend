const { logos, edit } = require("../../services/thumbnailtwoService/thumbnailtwoService");


const getAllLogos = async (req, res) => {
    try {
        const result = await logos();
        return res.status(200).json({ message: "success", data: result })
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: "not found" })
    }
}

const editLogos = async (req, res) => {
    try {
        const result = await edit(req.params, req.body)
        return res.status(200).json({ message: "success", data: result })
    } catch (error) {
        console.log(error);
        return res.status(404).json({ message: "not found" })
    }
}

module.exports = {
    getAllLogos,
    editLogos
}