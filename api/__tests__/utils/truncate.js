const { sequelize } = require('../../app/src/Database/Models');

module.exports = () => {
  return Promise.all(
    Object.keys(sequelize.models).map((key) => {
      return sequelize.models[key].destroy({ truncate: true, force: true });
    }),
  );
};
