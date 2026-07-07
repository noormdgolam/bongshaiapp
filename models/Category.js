const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  parentCategoryId: {
    type: DataTypes.UUID,
    allowNull: true // If null, it's a top-level category
  },
  attributesSchemaJSON: {
    type: DataTypes.TEXT, // Storing JSON for category-specific required attributes
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('attributesSchemaJSON');
      return rawValue ? JSON.parse(rawValue) : {};
    },
    set(value) {
      this.setDataValue('attributesSchemaJSON', JSON.stringify(value));
    }
  }
});

module.exports = Category;
