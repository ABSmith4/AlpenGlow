export default (sequelize, DataTypes) => {
  const ResortReviews = sequelize.define('resort_reviews', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
    },
    review_text: {
      type: DataTypes.STRING(255),
    },
  });

  return ResortReviews;
};
