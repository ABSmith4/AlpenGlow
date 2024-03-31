export default (sequelize, DataTypes) => {
  const UserAddress = sequelize.define('user_address', {
    Addressid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    City: {
      type: DataTypes.STRING
    },
    State: {
      type: DataTypes.STRING
    },
    PostalCode: {
      type: DataTypes.INTEGER
    },
  });

  return UserAddress;
};
