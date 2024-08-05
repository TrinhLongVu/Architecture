import { Sequelize, DataTypes } from "sequelize";

export default  (Sequelize, DataTypes) => {
    const NGUOINHAN = Sequelize.define('NGUOINHAN', {
        ID_NGUOINHAN: { type: DataTypes.INTEGER, primaryKey: true },
        ID_VOUCHER: DataTypes.INTEGER,
        SOLUOTDUNG: DataTypes.INTEGER,
        THOIGIANTANG: DataTypes.DATE,
      });

    return NGUOINHAN;
}