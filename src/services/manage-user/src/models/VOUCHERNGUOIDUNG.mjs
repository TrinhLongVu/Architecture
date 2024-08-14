import { Model, DataTypes } from 'sequelize';
import { sequelize } from './database'; // Adjust the import path as needed

class VOUCHERNGUOIDUNG extends Model {}

VoucherNguoidung.init({
  ID_NGUOIDUNG: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  ID_VOUCHER: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  SOLUOTDUNG: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  TRANGTHAI: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, { 
  sequelize, 
  modelName: 'VOUCHERNGUOIDUNG' 
});

export default VOUCHERNGUOIDUNG;
