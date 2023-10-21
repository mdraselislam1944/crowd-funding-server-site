const User = require("../models/users.model");

const getAllUsers = async (req, res) => {
    try {
        const result = await User.find();
        res.status(200).json(result);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const setUsers = async (req, res) => {
    const { email, name } = req.body;
    if (!email || !name) {
        return res.status(400).json({ error: "Both email and name are required." });
    }
    const existingUser = await User.findOne({ email });

    if (existingUser) {
        return res.status(406).json({ error: "Email already exists." });
    }
    try {
        const newUser = new User({ email, name })
        await newUser.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { getAllUsers, setUsers };