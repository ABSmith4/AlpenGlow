export default (sequelize, DataTypes) => {
  const VisitedResorts = sequelize.define('visited_resorts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    visited: {
      type: DataTypes.BOOLEAN,
    },
    start_date: {
      type: DataTypes.DATE
    },
    end_date: {
      type: DataTypes.DATE
    }
  });

  return VisitedResorts;
};