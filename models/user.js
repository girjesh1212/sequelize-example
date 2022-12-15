const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db.js')

// This code defines a user schema for postgres using sequelize ORM.
const User = sequelize.define('User', {
    user_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        unique: true
    },
});


module.exports = User;
