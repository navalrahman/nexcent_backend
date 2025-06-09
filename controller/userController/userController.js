const { create, login } = require("../../services/userService/userService");


const createAccount = async (req, res) => {
    try {
        const result = await create(req.body)
        return res.status(200).json({ status: "successfully created account", data: result })
    } catch (error) {
        console.log(error);
        return res.status(404).json({ status: "something wnent wrong", message: error.message, })
    }
}

const loginAccount = async (req, res) => {
    try {
        const result = await login(req.body)
        return res.status(200).json({ status: "successfully loggedIn", data: result })
    } catch (error) {
        console.log(error);
        return res.status(404).json({ status: "something wnent wrong", message: error.message, })
    }
}

module.exports = {
    createAccount,
    loginAccount
}