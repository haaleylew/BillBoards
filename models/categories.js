// categories table
module.exports = function(sequelize, DataTypes) {
  const Categories = sequelize.define("Categories", {
    business: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    categoryName: {
      type: DataTypes.STRING
    },
    subcategoryName: {
      type: DataTypes.STRING
    }
  });
  //categories belongs to a user -- a category cannot be created without a user due to the foreign key constraint
  Categories.associate = function(models) {
    Categories.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Categories;
};
 