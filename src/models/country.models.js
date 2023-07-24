export default (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    country_name: {
      type: DataTypes.STRING(10),
    },
  });

  return Country;
};