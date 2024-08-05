import { Sequelize, DataTypes } from "sequelize";

export default  (Sequelize, DataTypes) => {
    const TNGUOIDUNG = Sequelize.define('TNGUOIDUNG', {
        ID_TNGUOIDUNG: { type: DataTypes.INTEGER, primaryKey: true },
        MATKHAU: DataTypes.STRING,
        TENDANGNHAP: DataTypes.STRING,
        AVATAR: DataTypes.STRING,
        EMAIL: DataTypes.STRING,
        GIOITINH: DataTypes.BOOLEAN,
        NGAYSINH: DataTypes.DATEONLY,
        FACEBOOKID: DataTypes.STRING,
      });

    return TNGUOIDUNG;
}