export default (sequelize, DataTypes) => {
  const ResortLifts = sequelize.define('resort_lifts', {
    Addressid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    lift_name: {
      type: DataTypes.STRING,
    },
    lift_active: {
      type: DataTypes.BOOLEAN,
    },
  });

  return ResortLifts;
};