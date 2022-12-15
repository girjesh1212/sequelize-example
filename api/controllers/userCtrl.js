const express = require('express');
const User = require('../../models/user');

module.exports.test = (req, res) => {
    return res.status(200).json({ msg: 'Test route works' });
}

module.exports.createUser = async (req, res) => {
    if (!req.body.name || !req.body.email) {
        return res.status(400).json({ success: false, msg: 'Both name and email are required' });
    }

    try {
        const user = User.build({ name: req.body.name, email: req.body.email });
        await user.save();
        return res.status(200).json({ success: true, msg: 'User created successfully' });
    } catch (err) {
        return res.status(500).json({ success: false, msg: 'Some error occurred' });
    }

}

module.exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll({});
        return res.status(200).json(JSON.parse(JSON.stringify(users, null, 2)));
    } catch (err) {
        return res.status(500).json({ success: false, msg: 'Some error occurred' });
    }

}

