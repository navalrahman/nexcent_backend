const jwt = require('jsonwebtoken');

// Function to create a token
const JWT_SECRET = 'adfasfhakjda';

const createToken = (userId) => {
    try {
        const token = jwt.sign({ userId }, JWT_SECRET, { expiresIn: '1d' });
        return token;
    } catch (error) {
        console.error("Error creating token:", error.message);
        throw new Error("Token generation failed");
    }
};


module.exports = { createToken };