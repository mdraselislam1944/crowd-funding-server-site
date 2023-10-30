const { json } = require("express");
const User = require("../models/users.model");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const getAllUsers = async (req, res) => {

    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username: username });
        if (user) {
            bcrypt.compare(password, user.password, function (err, result) {
                if (result) {
                    res.status(200).json({ status: "valid user",id:user.id });
                }
                if (err) {
                    res.status(404).json({ status: "user password do not match" })
                }
            });
        }
        else {
            res.status(404).json({ status: "user not valid" })
        }
    } catch (error) {
        res.status(500).send(error.message);
    }
}
const setUsers = async (req, res) => {

    const { username, password, id } = req.body;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
        return res.status(406).json({ error: "user already exists." });
    }
    try {
        bcrypt.hash(password, saltRounds, async function (err, hash) {
            const newUser = new User({ username, password: hash, id });
            await newUser.save();
            res.status(201).json({ status: "success", data: newUser });
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports = { getAllUsers, setUsers };
