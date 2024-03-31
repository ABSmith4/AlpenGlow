export default (sequelize, DataTypes) => {
  const SkiTrips = sequelize.define('ski_trips', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    number_of_travelers: {
      type: DataTypes.INTEGER,
    },
    travel_method: {
      type: DataTypes.STRING,
    },
    travel_budget: {
      type: DataTypes.FLOAT,
    },
    food_budget: {
      type: DataTypes.FLOAT
    },
    lodging_hotel_location: {
      type: DataTypes.STRING
    },
    lodging_hotel_budget: {
      type: DataTypes.FLOAT
    },
    total_budget: {
      type: DataTypes.FLOAT
    },
  });

  return SkiTrips;
};
