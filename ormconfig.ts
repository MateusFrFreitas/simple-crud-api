module.exports = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: ['src/lib/entities/**/*.ts'],
  migrations: ['src/config/database/migrations/**/*.ts'],
  cli: {
    entitiesDir: 'src/lib/entities',
    migrationsDir: 'src/config/database/migrations',
  },
};
