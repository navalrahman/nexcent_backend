
const { getCollection } = require('../../config/connect.js')

const { ObjectId } = require('mongodb');


const logos = async () => {
    const collection = await getCollection('logos')
    const data = collection.find().toArray()
    return data
}

const edit = async (id, data) => {
    const collection = await getCollection('logos')
    const objectId = new ObjectId(id);
    const updatingData = await collection.updateOne({ _id: objectId }, { $set: data }, { new: true })

    // // console.log("updateData", updateData);

    const updateData = await collection.findOne({ _id: objectId })

    return updateData

}

module.exports = {
    logos,
    edit
}