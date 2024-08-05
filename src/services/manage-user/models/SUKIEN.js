import { Sequelize, DataTypes } from "sequelize";

export default  (Sequelize, DataTypes) => {
    const SUKIEN = Sequelize.define('SUKIEN', {
        ID_SUKIEN: { type: DataTypes.INTEGER, primaryKey: true },
        ID_NGUOIDUNG: { type: DataTypes.INTEGER, allowNull: false },
        TEN_SUKIEN: DataTypes.STRING,
        THOIGIANBATDAU: DataTypes.DATE,
        THOIGIANKETTHUC: DataTypes.DATE,
        HINHANHSUKIEN: DataTypes.BLOB,
        TRANGTHAI: DataTypes.BOOLEAN,
    });

    return SUKIEN;
}