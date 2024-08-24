import { Sequelize } from 'sequelize';

export default {
  "development": {
    "username": "root",
    "password": "userdb",
    "database": "userdb",
    "host": "userdb",
    "dialect": "mysql",
    "port": "3307"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "3307"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": "3307"
  }
}
