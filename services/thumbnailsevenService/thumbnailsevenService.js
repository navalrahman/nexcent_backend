
const { getCollection } = require('../../config/connect.js')

const { ObjectId } = require('mongodb');


const getData = async () => {
    const collection = await getCollection('icons')
    const data = collection.find({ icon: "fourththumbnail" }).toArray()
    return data
}

const editItem = async (id, data) => {
    const collection = await getCollection('icons')
    const objectId = new ObjectId(id)

    await collection.updateOne({ _id: objectId }, { $set: data }, { new: true })

    const updatedData = await collection.findOne({ _id: objectId })
    return updatedData
}

module.exports = {
    getData,
    editItem
}