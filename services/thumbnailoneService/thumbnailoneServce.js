const { getCollection } = require("../../config/connect")

const { ObjectId } = require('mongodb');


const data = async () => {
    const thumbnailOneData = await getCollection('icons');
    const datas = thumbnailOneData.find({ icon: 'mainthumbnail' }).toArray();
    return datas
}


const editData = async (id, data) => {

    const collection = await getCollection('icons');
    const objectId = new ObjectId(id);

    // console.log('id',id);
    
    // console.log("data",data);
    
    // const collectionData = await collection.findOne({ _id: objectId });

    // console.log("collectionData", collectionData);

    const updatingData = await collection.updateOne({ _id: objectId }, { $set: data }, { new: true })

    // // console.log("updateData", updateData);

    const updateData = await collection.findOne({_id:objectId})

    return updateData

}
module.exports = {
    data,
    editData
}