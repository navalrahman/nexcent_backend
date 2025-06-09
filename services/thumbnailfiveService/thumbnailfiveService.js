const { getCollection } = require('../../config/connect.js')

const { ObjectId } = require('mongodb');

const getData = async () => {
    const collection = await getCollection('icons')
    // console.log("collection",collection);
    const data = collection.find({ icon: "logo" }).toArray()
    return data

}

const editData = async (id, data) => {
    const collection = await getCollection('icons')
    const objectId = new ObjectId(id);
    const updatingData = await collection.updateOne({ _id: objectId }, { $set: data }, { new: true })

    // // console.log("updateData", updateData);

    const updateData = await collection.findOne({ _id: objectId })

    return updateData

}

module.exports = {
    getData,
    editData
}