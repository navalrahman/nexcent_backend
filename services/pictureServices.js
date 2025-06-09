
const { getCollection } = require('../config/connect')

const data = async() => {
    const collection = getCollection('icons')
    const items = await collection.find({icon:"mainthumbnail"}).toArray()
    return items
}

const logos = async () => {
    const logosCollection = getCollection('logos');
    const logos = await logosCollection.find().toArray();
    return logos;
}

const rightIcon = async () => {
    const logosCollection = getCollection('icons');
    const logos = await logosCollection.find({icon:"right"}).toArray();
    return logos;
}

const associationDetails = async () => {
    const associationCollection = getCollection('icons');
    const association = await associationCollection.find({icon:"association"}).toArray();
    return association;
}

const secondThumbnail = async () => {
    const secondThumbnailCollection = getCollection('icons');
    const secondThumbnails = await secondThumbnailCollection.find({icon:"secondthumbnail"}).toArray()
    return secondThumbnails
}

const thirdThumbnail = async () => {
    const thirdThumbnailCollection = getCollection('icons');
    const thirdThumbnails = await thirdThumbnailCollection.find({icon:"thirdthumbnail"}).toArray();
    return thirdThumbnails
}

const fourthThumbnail = async () => {
    const fourthThumbnailCollection = getCollection('icons');
    const fourthThumbnails = await fourthThumbnailCollection.find({icon:"fourththumbnail"}).toArray();
    return fourthThumbnails
}

const imageshumbnail = async () => {
    const imageshumbnailCollection = getCollection('icons');
    const imageshumbnails = await imageshumbnailCollection.find({icon:"image"}).toArray();
    return imageshumbnails
}

const logosAndImages = async () => {
    const logosAndImagesCollection = getCollection('icons');
    const logosAndImagesDetails = await logosAndImagesCollection.find({icon:'logo'}).toArray();
    return logosAndImagesDetails
}

module.exports = {
    data,
    logos,
    rightIcon,
    associationDetails,
    secondThumbnail,
    thirdThumbnail,
    fourthThumbnail,
    imageshumbnail,
    logosAndImages
}