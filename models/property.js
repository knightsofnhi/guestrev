module.exports = function(sequelize, DataTypes) {
  const Property = sequelize.define("Property", {
    name: DataTypes.STRING
  });

  Property.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Property.hasMany(models.Task, {
      onDelete: "cascade"
    });
  };

  return Property;
};
