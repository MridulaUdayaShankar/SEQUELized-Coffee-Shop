module.exports = function(sequelize, DataTypes) {
  var Coffee = sequelize.define("Coffee", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      max: 10
    },
    name: {
      type: DataTypes.STRING,
      is: ["^[a-z]+$",'i'],
      allowNull: false
    },
    drink: DataTypes.BOOLEAN
  });

  return Coffee;
};
