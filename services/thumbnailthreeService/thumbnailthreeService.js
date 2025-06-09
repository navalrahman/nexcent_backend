const { getCollection } = require("../../config/connect")

const { ObjectId } = require('mongodb');


const getAssociation = async () => {
    const collection = await getCollection('icons')
    const data = await collection.find({ icon: "association" }).toArray()
    return data
}

const EditAssociation = async (id, data) => {
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
    getAssociation,
    EditAssociation
}