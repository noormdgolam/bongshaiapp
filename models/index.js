const sequelize = require('../config/database');
const User = require('./User');
const Category = require('./Category');
const Product = require('./Product');
const RFQ = require('./RFQ');

// Define Associations

// A Category can have a parent Category (Subcategories)
Category.belongsTo(Category, { as: 'parentCategory', foreignKey: 'parentCategoryId' });

// Supplier (User) has many Products
User.hasMany(Product, { foreignKey: 'supplierId', as: 'products' });
Product.belongsTo(User, { foreignKey: 'supplierId', as: 'supplier' });

// Category has many Products
Category.hasMany(Product, { foreignKey: 'categoryId', as: 'products' });
Product.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

// Buyer (User) creates many RFQs
User.hasMany(RFQ, { foreignKey: 'buyerId', as: 'rfqs' });
RFQ.belongsTo(User, { foreignKey: 'buyerId', as: 'buyer' });

// RFQ belongs to a Category
Category.hasMany(RFQ, { foreignKey: 'categoryId', as: 'rfqs' });
RFQ.belongsTo(Category, { foreignKey: 'categoryId', as: 'category' });

module.exports = {
  sequelize,
  User,
  Category,
  Product,
  RFQ
};
