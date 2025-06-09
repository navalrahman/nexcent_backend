// db.js
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://navalrahman:Na9048027870@cluster0.j0oa6.mongodb.net/";
const dbName = "nexcent";

let db;
let collections = {}; // this replaces collectionName

const connectToDB = async () => {
    try {
        const client = await MongoClient.connect(uri, { useUnifiedTopology: true });
        db = client.db(dbName);
        collections.logos = db.collection('logos');
        collections.icons = db.collection('icons');
        collections.user = db.collection('user');
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Error while connecting to MongoDB", err);
        process.exit(1);
    }
};

const getCollection = (name) => {
    if (!collections[name]) {
        throw new Error(`Collection "${name}" not found. Did you call connectToDB()?`);
    }
    return collections[name];
};

module.exports = { connectToDB, getCollection };
