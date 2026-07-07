const { Sequelize } = require('sequelize');
const path = require('path');

// Initialize Sequelize with SQLite for local development
// Later, this can be changed to connect to cPanel's MySQL database
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, '..', 'database.sqlite'),
  logging: false // Disable logging SQL queries to console to keep it clean
});

module.exports = sequelize;
