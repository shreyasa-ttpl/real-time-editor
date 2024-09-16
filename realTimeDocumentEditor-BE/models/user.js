const { DataTypes } = require('sequelize');
const sequelize = require('../db'); // Import the Sequelize connection

// Define the User model
const User = sequelize.define('User', {
    // Define the columns of the table
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    // Other model options go here
    tableName: 'users', // Specify the table name
});

module.exports = User;
