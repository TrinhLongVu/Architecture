import { Model, DataTypes } from 'sequelize';

export default  (Sequelize, DataTypes) => {
    const SUKIENYEUTHICH = Sequelize.define('SUKIENYEUTHICH', {
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
        allowNull: false
      }
      });

    return SUKIENYEUTHICH;
}
