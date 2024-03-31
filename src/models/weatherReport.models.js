export default (sequelize, DataTypes) => {
  const WeatherReport = sequelize.define('weather_report', {
    Addressid: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    current_temp: {
      type: DataTypes.FLOAT,
    },
    current_feels_like_temp: {
      type: DataTypes.FLOAT,
    },
    current_sunrise: {
      type: DataTypes.REAL,
    },
    current_sunset: {
      type: DataTypes.REAL,
    },
    current_humidity: {
      type: DataTypes.FLOAT,
    },
    current_cloudiness: {
      type: DataTypes.INTEGER,
    },
    current_windspeed: {
      type: DataTypes.FLOAT,
    },
    current_windgust: {
      type: DataTypes.FLOAT,
    },
    current_winddirection: {
      type: DataTypes.FLOAT,
    },
    current_snow: {
      type: DataTypes.FLOAT,
    },
    current_rain: {
      type: DataTypes.FLOAT,
    },
    current_weather_main: {
      type: DataTypes.STRING(30),
    },
    current_weather_description: {
      type: DataTypes.STRING(50),
    },
    current_weather_icon_byid: {
      type: DataTypes.STRING(8),
    },
    hourly_temp: {
      type: DataTypes.FLOAT,
    },
    hourly_visibility: {
      type: DataTypes.FLOAT,
    },
    hourly_precipitation_probability: {
      type: DataTypes.FLOAT,
    },
    hourly_weather_main: {
      type: DataTypes.STRING(30),
    },
    hourly_weather_description: {
      type: DataTypes.STRING(50),
    },
    hourly_weather_icon_byid: {
      type: DataTypes.STRING(8),
    },
    daily_time_of_forecasted_data: {
      type: DataTypes.REAL,
    },
    daily_temp_min: {
      type: DataTypes.FLOAT,
    },
    daily_temp_max: {
      type: DataTypes.FLOAT,
    },
    daily_sunrise: {
      type: DataTypes.REAL,
    },
    daily_sunset: {
      type: DataTypes.REAL,
    },
    daily_hourly_precipitation_probability: {
      type: DataTypes.FLOAT,
    },
    daily_rain: {
      type: DataTypes.FLOAT,
    },
    daily_snow: {
      type: DataTypes.FLOAT,
    },
    daily_weather_main: {
      type: DataTypes.STRING(30),
    },
    daily_weather_description: {
      type: DataTypes.STRING(50),
    },
    daily_weather_icon: {
      type: DataTypes.STRING(8),
    },
    alert_event_name: {
      type: DataTypes.STRING(35),
    },
    alert_start: {
      type: DataTypes.REAL,
    },
    alert_end: {
      type: DataTypes.REAL,
    },
    alert_description: {
      type: DataTypes.TEXT,
    },
    alert_tags: {
      type: DataTypes.STRING,
    },
  });

  return WeatherReport;
};
