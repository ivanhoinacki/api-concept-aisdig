'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TranslateMovie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  TranslateMovie.init(
    {
      movieId: DataTypes.INTEGER,
      iso_3166_1: DataTypes.STRING,
      iso_639_1: DataTypes.STRING,
      name: DataTypes.STRING,
      english_name: DataTypes.STRING,
      data: {
        type: DataTypes.TEXT,
        get: function () {
          return JSON.parse(this.getDataValue('data'));
        },
        set: function (value) {
          this.setDataValue('data', JSON.stringify(value));
        },
      },
    },
    {
      sequelize,
      modelName: 'TranslateMovie',
    }
  );
  return TranslateMovie;
};
