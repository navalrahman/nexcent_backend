const { getCollection } = require('../../config/connect')

const { ObjectId } = require('mongodb');


const images = async () => {
    const imageCollection = await getCollection('icons')
    // console.log(imageCollection);

    const images = await imageCollection.find({ icon: 'image' }).toArray()
    console.log("images", images)
    return images
}

const edit = async (id, data) => {
    // try {
        const collection = await getCollection('icons');
        // const id = id

        const objectId = new ObjectId(id);
        const { url, content } = data;

        //  update
        const updateResult = await collection.updateOne(
            { _id: objectId },
            { $set: { url, content } }
        );

        if (updateResult.modifiedCount === 0) {
            return res.status(404).json({ message: 'Failed to update' });
        }

        const updatedImage = await collection.findOne({ _id: objectId });
        return updatedImage
}

module.exports = {
    images,
    edit
}