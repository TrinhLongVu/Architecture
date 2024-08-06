const db = require('../dbs/mysql.dbs');

class VoucherSuKien {
    static getAll = async () => {
        const results = await db.query('SELECT * FROM VOUCHER_SUKIEN');
        return results;
    };

    static getByIds = async (voucherId, sukienId) => {
        const results = await db.query('SELECT * FROM VOUCHER_SUKIEN WHERE ID_VOUCHER = ? AND ID_SUKIEN = ?', [voucherId, sukienId]);
        return results[0];
    };

    static create = async (data) => {
        const { ID_VOUCHER, ID_SUKIEN, SOLUONGVOUCHER } = data;
        const result = await db.query(
            'INSERT INTO VOUCHER_SUKIEN (ID_VOUCHER, ID_SUKIEN, SOLUONGVOUCHER) VALUES (?, ?, ?)',
            [ID_VOUCHER, ID_SUKIEN, SOLUONGVOUCHER]
        );
        return result.insertId;
    };

    static update = async (voucherId, sukienId, data) => {
        const { SOLUONGVOUCHER } = data;
        await db.query(
            'UPDATE VOUCHER_SUKIEN SET SOLUONGVOUCHER = ? WHERE ID_VOUCHER = ? AND ID_SUKIEN = ?',
            [SOLUONGVOUCHER, voucherId, sukienId]
        );
    };

    static remove = async (voucherId, sukienId) => {
        await db.query('DELETE FROM VOUCHER_SUKIEN WHERE ID_VOUCHER = ? AND ID_SUKIEN = ?', [voucherId, sukienId]);
    };
}

module.exports = VoucherSuKien;
