
const { getCollection } = require('../../config/connect')

const { ObjectId } = require('mongodb');


const getData = async () => {
    const collection = await getCollection('icons')
    const data = collection.find({ icon: "thirdthumbnail" }).toArray()
    return data
}

const edit = async (id, data) => {
    const collection = await getCollection('icons')

    const objectId = new ObjectId(id);

    // const collectionData = await collection.findOne({ _id: objectId });

    // console.log("collectionData", collectionData);

    await collection.updateOne({ _id: objectId }, { $set: data }, { new: true })

    // console.log("updateData", updateData);

    const updateData = await collection.findOne({ _id: objectId })

    return updateData
}

module.exports = {
    getData
}