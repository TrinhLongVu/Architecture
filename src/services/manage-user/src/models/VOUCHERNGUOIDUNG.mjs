export default  (Sequelize, DataTypes) => {
    const VOUCHERNGUOIDUNG = Sequelize.define('VOUCHERNGUOIDUNG', {
      ID_NGUOIDUNG: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false
      },
      ID_VOUCHER: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      SOLUOTDUNG: {
        type: DataTypes.INTEGER,
        allowNull: true
      },
      TRANGTHAI: {
        type: DataTypes.STRING,
        allowNull: true
      }
      });

    return VOUCHERNGUOIDUNG;
}
