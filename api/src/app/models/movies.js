'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Movies.init({
    popularity: DataTypes.DECIMAL,
    vote_count: DataTypes.INTEGER,
    video: DataTypes.BOOLEAN,
    poster_path: DataTypes.STRING,
    id_movie: DataTypes.INTEGER,
    adult: DataTypes.BOOLEAN,
    backdrop_path: DataTypes.STRING,
    original_language: DataTypes.STRING,
    original_title: DataTypes.STRING,
    genre_ids: DataTypes.STRING,
    title: DataTypes.STRING,
    vote_average: DataTypes.DECIMAL,
    overview: DataTypes.STRING,
    release_date: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Movies',
  });
  return Movies;
};
