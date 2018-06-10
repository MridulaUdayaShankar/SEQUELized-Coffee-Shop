module.exports = function(sequelize, DataTypes) {
  var Coffee = sequelize.define("Coffee", {
    id:{
      type: DataTypes.INTEGER,
      allowNull: true,
      max: 10
    },
    name: {
      type: DataTypes.STRING,
      is: ["^[a-z]+$",'i'],
      allowNull: true
    },
    drink: DataTypes.BOOLEAN
  });

  return Coffee;
};
