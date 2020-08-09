'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Movies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      popularity: Sequelize.DECIMAL,
      vote_count: Sequelize.INTEGER,
      video: Sequelize.BOOLEAN,
      poster_path: Sequelize.STRING,
      id_movie: Sequelize.INTEGER,
      adult: Sequelize.BOOLEAN,
      backdrop_path: Sequelize.STRING,
      original_language: Sequelize.STRING,
      original_title: Sequelize.TEXT,
      genre_ids: Sequelize.JSONB,
      title: Sequelize.STRING,
      vote_average: Sequelize.DECIMAL,
      overview: Sequelize.TEXT,
      release_date: Sequelize.DATE,
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Movies');
  },
};
