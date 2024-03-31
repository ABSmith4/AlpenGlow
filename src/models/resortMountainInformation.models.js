export default (sequelize, DataTypes) => {
  const ResortMountainInformation = sequelize.define('resort_mountain_information', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    lift_terrain_slug: {
      type: DataTypes.STRING,
    },
    main_site_link: {
      type: DataTypes.STRING,
    },
    elevation: {
      type: DataTypes.INTEGER,
    },
    vertical_drop: {
      type: DataTypes.INTEGER,
    },
    trail_numbers: {
      type: DataTypes.INTEGER,
    },
    lift_number: {
      type: DataTypes.INTEGER,
    },
    terrainpark_number: {
      type: DataTypes.INTEGER,
    },
    trailmap_filepath: {
      type: DataTypes.CHAR,
    },
    time_resort_opens: {
      type: DataTypes.INTEGER,
    },
    time_resort_closes: {
      type: DataTypes.INTEGER,
    },
    opening_date: {
      type: DataTypes.DATE,
    },
    closing_date: {
      type: DataTypes.DATE,
    },
    latitude: {
      type: DataTypes.GEOMETRY('POINT'),
    },
    longitude: {
      type: DataTypes.GEOMETRY('POINT'),
    },
  });

  return ResortMountainInformation;
};
