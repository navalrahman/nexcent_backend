
const { getCollection } = require("../../config/connect");
const { ObjectId } = require('mongodb');


const getData = async () => {
    const collection =  getCollection('icons')
    const data = collection.find({icon:"secondthumbnail"}).toArray()
    return data
}

const editDataOne = async (id, data) => {
    const collection = await getCollection('icons')
    const objectId = new ObjectId(id);

    // console.log(id);
    
    // console.log(data);
    
    // const collectionData = await collection.findOne({ _id: objectId });

    // console.log("collectionData", collectionData);

    const updatingData = await collection.updateOne({ _id: objectId }, { $set: data }, { new: true })

    // // console.log("updateData", updateData);

    const updateData = await collection.findOne({_id:objectId})

    return updateData

}

module.exports = {
    getData,
    editDataOne
}
