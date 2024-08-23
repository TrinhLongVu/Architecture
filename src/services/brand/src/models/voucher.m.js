const db = require('../dbs/mysql.dbs');

class Voucher {
    static getAll = async () => {
        const results = await db.query('SELECT * FROM VOUCHER');
        return results;
    };

    static getById = async (id) => {
        const results = await db.query('SELECT * FROM VOUCHER WHERE ID_VOUCHER = ?', [id]);
        return results[0];
    };

    static create = async (data) => {
        const { ID_THUONGHIEU, NGAYHETHAN, TRIGIA, TRANGTHAI, HINHANH, QRCODE, MOTA } = data;
        const result = await db.query(
            'INSERT INTO VOUCHER (ID_THUONGHIEU, NGAYHETHAN, TRIGIA, TRANGTHAI, HINHANH, QRCODE, MOTA) VALUES (?, ?, ?, ?, ?, ?, ?)',
            [ID_THUONGHIEU, NGAYHETHAN, TRIGIA, TRANGTHAI, HINHANH, QRCODE, MOTA]
        );
        return result.insertId;
    };

    static update = async (id, data) => {
        const { ID_THUONGHIEU, NGAYHETHAN, TRIGIA, TRANGTHAI, HINHANH, QRCODE, MOTA } = data;
        await db.query(
            'UPDATE VOUCHER SET ID_THUONGHIEU = ?, NGAYHETHAN = ?, TRIGIA = ?, TRANGTHAI = ?, HINHANH = ?, QRCODE = ?, MOTA = ? WHERE ID_VOUCHER = ?',
            [ID_THUONGHIEU, NGAYHETHAN, TRIGIA, TRANGTHAI, HINHANH, QRCODE, MOTA, id]
        );
    };

    static remove = async (id) => {
        await db.query('DELETE FROM VOUCHER WHERE ID_VOUCHER = ?', [id]);
    };

    static getRandomVoucher = async () => {
        const results = await db.query(
            'SELECT * FROM VOUCHER ORDER BY RAND() LIMIT 1'
        );
        return results[0];
    };

    static getByBrand = async (idThuongHieu) => {
        const results = await db.query('SELECT * FROM VOUCHER WHERE ID_THUONGHIEU = ?', [idThuongHieu]);
        return results;
    };
}

module.exports = Voucher;
