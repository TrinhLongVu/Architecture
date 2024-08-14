import { Model, DataTypes } from 'sequelize';
import { sequelize } from './database'; // Adjust the import path as needed

class SUKIENNGUOIDUNG extends Model {}

SukienNguoidung.init({
  ID_NGUOIDUNG: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  ID_SUKIEN: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  ISFAVORITE: {
    type: DataTypes.BOOLEAN,
    allowNull: true
  },
  LUOTCHOI: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  DIEMSO: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, { 
  sequelize, 
  modelName: 'SUKIENNGUOIDUNG' 
});

export default SUKIENNGUOIDUNG;
