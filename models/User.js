const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  role: {
    type: DataTypes.ENUM('buyer', 'supplier', 'admin'),
    allowNull: false,
    defaultValue: 'buyer'
  },
  companyName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true
  },
  passwordHash: {
    type: DataTypes.STRING,
    allowNull: false
  },
  verificationLevel: {
    type: DataTypes.ENUM('listed', 'verified', 'audited', 'compliant'),
    defaultValue: 'listed'
  },
  documentsJSON: {
    type: DataTypes.TEXT, // Storing JSON string for documents (sqlite doesn't have native JSON)
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('documentsJSON');
      return rawValue ? JSON.parse(rawValue) : [];
    },
    set(value) {
      this.setDataValue('documentsJSON', JSON.stringify(value));
    }
  }
});

module.exports = User;
