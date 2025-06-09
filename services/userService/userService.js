
const { getCollection } = require('../../config/connect');
const bcrypt = require('bcrypt');
const { createToken } = require('../../config/token');

const create = async (data) => {
    const { name, email, password } = data;

    // Validate fields
    if (!name || !email || !password) {
        throw new Error("Missing fields: name, email, or password");
    }

    const userCollection = await getCollection('user');

    // Check if user already exists
    const existingUser = await userCollection.findOne({ email });
    if (existingUser) {
        throw new Error("User already exists with this email");
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    const result = await userCollection.insertOne({
        name,
        email,
        password: hashedPassword
    });

    return {
        message: "User created successfully",
        userId: result.insertedId
    };
};

const login = async (data) => {
    const { email, password } = data;

    // Validate fields
    if (!email || !password) {
        throw new Error("Missing fields: email or password");
    }

    const userCollection = await getCollection('user');

    // Find user by email
    const existingUser = await userCollection.findOne({ email });

    if (!existingUser) {
        throw new Error("Invalid credentials");
    }

    // Compare passwords
    const isPasswordValid = await bcrypt.compare(password, existingUser.password);
    if (!isPasswordValid) {
        throw new Error("Password is incorrect");
    }

    const token = createToken(existingUser._id)

    return {
        message: "Login successful",
        name: existingUser.name,
        email: existingUser.email,
        token
        // You can add a JWT token here if using token-based auth
    };
};

module.exports = {
    create,
    login
};
