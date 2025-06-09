const { images, edit } = require('../../services/thumbnaileightService/thumbnaileightService')

const getimages = async (req, res) => {
    try {
        const result = await images()
        res.status(200).json({ message: 'success', data: result })
    } catch (error) {
        res.status(404).json({ message: "failed to fetch the images" })
    }
}


const editimages = async (req, res) => {
    try {
        const result = await edit(req.params, req.body)
        return res.status(200).json({ message: 'Success', data: result });

    } catch (error) {
        console.error('Error updating image:', err);
        return res.status(500).json({ message: 'Server Error' });
    }
 
};


module.exports = {
    getimages,
    editimages
}