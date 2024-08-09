import { Sequelize, DataTypes } from "sequelize";

export default  (Sequelize, DataTypes) => {
    const VOUCHER = Sequelize.define('VOUCHER', {
        ID_VOUCHER: { type: DataTypes.INTEGER, primaryKey: true },
        ID_THUONGHIEU: DataTypes.INTEGER,
        NGAYHETHAN: DataTypes.DATE,
        TRIGIA: DataTypes.FLOAT,
        TRANGTHAI: DataTypes.BOOLEAN,
        HINHANH: DataTypes.BLOB,
        QRCODE: DataTypes.STRING,
        MOTA: DataTypes.STRING,
      });

    return VOUCHER;
}