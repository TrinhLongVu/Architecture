import { Sequelize, DataTypes } from "sequelize";

export default  (Sequelize, DataTypes) => {
    const TTNGUOIDUNG = Sequelize.define('TTNGUOIDUNG', {
        ID_TTNGUOIDUNG: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        MATKHAU: DataTypes.STRING,
        TENDANGNHAP: DataTypes.STRING,
        SDT: DataTypes.STRING,
        AVATAR: DataTypes.STRING,
        EMAIL: DataTypes.STRING,
        GIOITINH: DataTypes.BOOLEAN,
        NGAYSINH: DataTypes.DATEONLY,
        FACEBOOKID: DataTypes.STRING,
        TRANGTHAI: DataTypes.STRING,
        VAITRO: DataTypes.STRING,
        OTP: DataTypes.STRING,
        CREATE_OTP: DataTypes.DATE,
      });

    return TTNGUOIDUNG;
}