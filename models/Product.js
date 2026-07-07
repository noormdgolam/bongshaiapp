const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  supplierId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  },
  priceRange: {
    type: DataTypes.STRING, // e.g. "$500 - $600"
    allowNull: true
  },
  imagesJSON: {
    type: DataTypes.TEXT,
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('imagesJSON');
      return rawValue ? JSON.parse(rawValue) : [];
    },
    set(value) {
      this.setDataValue('imagesJSON', JSON.stringify(value));
    }
  },
  dynamicAttributesJSON: {
    type: DataTypes.TEXT, // Extremely important for Horizontal marketplace to store flexible attributes (e.g. { grade: "500W" })
    allowNull: true,
    get() {
      const rawValue = this.getDataValue('dynamicAttributesJSON');
      return rawValue ? JSON.parse(rawValue) : {};
    },
    set(value) {
      this.setDataValue('dynamicAttributesJSON', JSON.stringify(value));
    }
  },
  moq: {
    type: DataTypes.STRING, // e.g. "10 Tonnes" or "100 Cartons"
    allowNull: true
  }
});

module.exports = Product;
