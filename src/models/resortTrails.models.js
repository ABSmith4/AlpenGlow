export default (sequelize, DataTypes) => {
  const ResortTrails = sequelize.define('resort_trails', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    trail_name: {
      type: DataTypes.STRING,
    },
    difficulty_level: {
      type: DataTypes.STRING,
    },
    trail_active: {
      type: DataTypes.BOOLEAN,
    },
  });

  return ResortTrails;
};