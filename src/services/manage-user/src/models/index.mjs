import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import NGUOINHAN from './NGUOINHAN.mjs';
import QUATANG from './QUATANG.mjs';
import SUKIEN from './SUKIEN.mjs';
import TTNGUOIDUNG from './TTNGUOIDUNG.mjs';
import VOUCHER from './VOUCHER.mjs';
import SUKIENYEUTHICH from './SUKIENYEUTHICH.mjs';
import VOUCHERNGUOIDUNG from './VOUCHERNGUOIDUNG.mjs';

const env = process.env.NODE_ENV || 'development';
const sequelizeConfig = config[env];

const sequelize = new Sequelize(sequelizeConfig.database, sequelizeConfig.username, sequelizeConfig.password, {
  host: sequelizeConfig.host,
  dialect: sequelizeConfig.dialect,
  port: sequelizeConfig.port
});

const db = {
  sequelize,
  Sequelize,
  NGUOINHAN: NGUOINHAN(sequelize, Sequelize.DataTypes),
  QUATANG: QUATANG(sequelize, Sequelize.DataTypes),
  SUKIEN: SUKIEN(sequelize, Sequelize.DataTypes),
  TTNGUOIDUNG: TTNGUOIDUNG(sequelize, Sequelize.DataTypes),
  VOUCHER: VOUCHER(sequelize, Sequelize.DataTypes),
  SUKIENYEUTHICH: SUKIENYEUTHICH(sequelize,Sequelize.DataTypes),
  VOUCHERNGUOIDUNG: VOUCHERNGUOIDUNG(sequelize,Sequelize.DataTypes)
};

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

export default db;
