const { getCollection } = require('../config/connect')
const jwt = require('jsonwebtoken')
const { ObjectId } = require('mongodb');


const verifyToken = async (req, res, next) => {
    // console.log('verify',req.headers);
    try {
        const authorization = req.headers.authorization
        // console.log("authorization", authorization);
        if (!authorization || !authorization.startsWith("Bearer ")) {
            return res.status(401).json({ error: "Unauthorized" });
        }

        const token = authorization.split(' ')[1]

        // console.log("token", token);
        const JWT_SECRET = 'adfasfhakjda';

        const decode = jwt.verify(token, JWT_SECRET)
        // console.log("decode", decode);

        const userCollection = await getCollection('user');

        // console.log("userCollection",userCollection);
        
        const objectId = new ObjectId(decode.userId);
        // console.log("objectId",objectId);

        const user = await userCollection.findOne(
            { _id: objectId },
            { projection: { password: 0 } }  // MongoDB projection to exclude password
        );

        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }

        // console.log("user",user);
        
        req.user = user; // Attach user to request
        next();


    } catch (error) {
        return res.status(401).send("Not authorized, token not valid")
    }



}

module.exports = { verifyToken }