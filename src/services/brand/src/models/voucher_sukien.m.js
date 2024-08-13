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
        const SOLUOTSUDUNG = 0;
        const TRANGTHAI = "usable";
        const result = await db.query(
            'INSERT INTO VOUCHER_SUKIEN (ID_VOUCHER, ID_SUKIEN, SOLUONGVOUCHER, SOLUOTSUDUNG, TRANGTHAI) VALUES (?, ?, ?, ?, ?)',
            [ID_VOUCHER, ID_SUKIEN, SOLUONGVOUCHER, SOLUOTSUDUNG, TRANGTHAI]
        );
        return result.insertId;
    };

    static update = async (voucherId, sukienId, data) => {
        const { SOLUONGVOUCHER, TRANGTHAI } = data;
        await db.query(
            'UPDATE VOUCHER_SUKIEN SET SOLUONGVOUCHER = ?, TRANGTHAI = ? WHERE ID_VOUCHER = ? AND ID_SUKIEN = ?',
            [SOLUONGVOUCHER, TRANGTHAI, voucherId, sukienId]
        );
    };

    static remove = async (voucherId, sukienId) => {
        await db.query('DELETE FROM VOUCHER_SUKIEN WHERE ID_VOUCHER = ? AND ID_SUKIEN = ?', [voucherId, sukienId]);
    };

    static getAllByEvent = async (sukienId) => {
        const results = await db.query('SELECT * FROM VOUCHER_SUKIEN WHERE ID_SUKIEN = ?', [sukienId]);
        return results;
    };

    static getRandomUsableVoucher = async (sukienId) => {
        const results = await db.query(
            `SELECT * FROM VOUCHER_SUKIEN 
             WHERE ID_SUKIEN = ? AND TRANGTHAI = 'usable' 
             ORDER BY RAND() LIMIT 1`,
            [sukienId]
        );
        return results[0];
    };

    static incrementUsage = async (voucherId, sukienId) => {
        const results = await db.query(
            'UPDATE VOUCHER_SUKIEN SET SOLUOTSUDUNG = SOLUOTSUDUNG + 1 WHERE ID_VOUCHER = ? AND ID_SUKIEN = ?',
            [voucherId, sukienId]
        );
        return results;
    };

    static markAsUnusable = async (voucherId, sukienId) => {
        await db.query(
            'UPDATE VOUCHER_SUKIEN SET TRANGTHAI = "unusable" WHERE ID_VOUCHER = ? AND ID_SUKIEN = ?',
            [voucherId, sukienId]
        );
    };
}

module.exports = VoucherSuKien;
