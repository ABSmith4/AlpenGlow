export default (sequelize, DataTypes) => {
  const Resort = sequelize.define('Resort', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    resort_name: {
      type: DataTypes.STRING,
    },
  });

  return Resort;
};