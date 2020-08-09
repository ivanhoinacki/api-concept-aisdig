module.exports = {
  development: {
    username: process.env.PG_USER || 'postgres',
    password: process.env.PG_PASSWORD || '123123',
    database: process.env.PG_DATABASE || 'ais-api-concept',
    host: process.env.PG_HOST || 'localhost',
    port: process.env.PG_PORT || 5432,
    dialect: 'postgres',
    logging: false,
    define: {
      timestamps: true,
      freezeTableName: true,
    },
  },
  test: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: 'postgres',
    logging: false,
    define: {
      timestamps: true,
      freezeTableName: true,
    },
  },
  production: {
    username: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: 'postgres',
    logging: false,
    define: {
      timestamps: true,
      freezeTableName: true,
    },
  },
};
