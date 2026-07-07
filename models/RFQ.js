const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const RFQ = sequelize.define('RFQ', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  buyerId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.UUID,
    allowNull: false // Which of the 16 categories does this RFQ fall under
  },
  specificationsJSON: {
    type: DataTypes.TEXT, // Storing dynamic buyer specs in JSON
    allowNull: false,
    get() {
      const rawValue = this.getDataValue('specificationsJSON');
      return rawValue ? JSON.parse(rawValue) : {};
    },
    set(value) {
      this.setDataValue('specificationsJSON', JSON.stringify(value));
    }
  },
  targetLocation: {
    type: DataTypes.STRING,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('open', 'quoted', 'closed'),
    defaultValue: 'open'
  }
});

module.exports = RFQ;
