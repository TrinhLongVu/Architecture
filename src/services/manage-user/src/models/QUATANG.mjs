import { Sequelize, DataTypes } from "sequelize";

export default  (Sequelize, DataTypes) => {
    const QUATANG = Sequelize.define('QUATANG', {
        ID_QUATANG: { type: DataTypes.INTEGER, primaryKey: true },
        ID_NGUOITANG: DataTypes.INTEGER,
        ID_NGUOINHAN: DataTypes.INTEGER,
        ISFAVORITE: DataTypes.BOOLEAN,
        LUOTCHOI: DataTypes.INTEGER,
        DIEMSO: DataTypes.INTEGER,
      });

    return QUATANG;
}