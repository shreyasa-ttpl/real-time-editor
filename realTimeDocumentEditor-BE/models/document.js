const { DataTypes } = require('sequelize');
const sequelize = require('../db/sequelize'); // Import the Sequelize connection

// Define the User model
const Document = sequelize.define('Document', {
    // Define the columns of the table
    document_id: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    data: {
        type: DataTypes.JSON,
        allowNull: true,
    },
}, {
    // Other model options go here
    tableName: 'documents', // Specify the table name
});

module.exports = Document;
