/* eslint-disable max-len */
/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable no-console */
import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';
import dbConfig from '../config/db.config';
import skiTripsModels from './skiTrips.models';
import userModels from './user.models';
import userAddressModels from './userAddress.models';
import VisitedResortsModels from './VisitedResorts.models';
import ResortModels from './Resort.models';
import resortMountainInformationModels from './resortMountainInformation.models';
import resortReviewsModels from './resortReviews.models';
import weatherReportModels from './weatherReport.models';
import resortLiftsModels from './resortLifts.models';
import resortTrailsModels from './resortTrails.models';

const basename = path.basename(__filename);
const inProduction = process.env.NODE_ENV === 'production';

// Modify the Sequelize instance creation based on environment variables or config file
let sequelize;
if (inProduction && process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: dbConfig.dialect,
    logging: false, // Set to true if you want to see SQL logs during development
  });
} else {
  sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
    {
      host: dbConfig.HOST,
      dialect: dbConfig.dialect,
      operatorsAliases: false,
      pool: dbConfig.pool,
      logging: false, // Set to true if you want to see SQL logs during development
    }
  );
}

// Create a db object to store the models
const db = {};

// Authenticate the database connection
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database', error);
  }
})();

// Read all model files and associate them with Sequelize instance
fs.readdirSync(__dirname)
  .filter((file) => file !== basename && file.slice(-3) === '.js')
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

// Model/sql table relationships

// Note: tables with multiple foreign keys are an odd concept

// User Table
userModels.hasMany(userAddressModels); // User has many UserAddress
userModels.hasMany(VisitedResortsModels); // User has many VisitedResorts
userModels.hasMany(skiTripsModels); // User has many ski trips
userModels.hasMany(resortReviewsModels); // User has many resort reviews
userModels.hasMany(authTokensModels);

// User Addrress Table
userAddressModels.belongsTo(userModels); // UserAddress belongs to User

// Ski Trip Table
skiTripsModels.belongsTo(userModels); // Ski trips belongs to user

// Visited Resorts Table
VisitedResortsModels.belongsTo(userModels); // VisitedResorts belongs to User (FK)
VisitedResortsModels.belongsTo(ResortModels); // Visited Resorts belongs to Resorts (FK)

// Resort Table
ResortModels.hasOne(VisitedResortsModels); // Resort has many VisitedResorts      ??? I think this is it ???
ResortModels.hasOne(weatherReportModels);
ResortModels.hasOne(resortMountainInformationModels);
ResortModels.hasMany(resortReviewsModels); // Resort has many reviews
ResortModels.hasMany(resortLiftsModels); // Resort has many ResortLifts
ResortModels.hasMany(resortTrailsModels); // Resort has many ResortTrails

// Resort Mountain Information Table
resortMountainInformationModels.belongsTo(ResortModels); // Resort belongs to ResortMountainInformation

// Resort Reviews Table
resortReviewsModels.belongsTo(ResortModels); // ResortReviews belongs to Resort (FK)
resortReviewsModels.belongsTo(userModels); // Resort Reviews belongs to user (FK)

// Weather Report table
weatherReportModels.belongsTo(ResortModels); // WeatherReport belongs to Resort (FK)

// Resort Lifts Table
resortLiftsModels.belongsTo(ResortModels); // ResortLifts belongs to Resort (FK)

// Resort trails models
resortTrailsModels.belongsTo(ResortModels); // ResortTrails belongs to Resort

// Export the Sequelize instance and models for use in other parts of the application
export default { sequelize, ...db };
