const db = require('../db');

const getAll = async () => {
    const [rows] = await db.query('SELECT * FROM VOUCHER_SUKIEN');
    return rows;
};

const getByIds = async (voucherId, sukienId) => {
    const [rows] = await db.query('SELECT * FROM VOUCHER_SUKIEN WHERE ID_VOUCHER = ? AND ID_SUKIEN = ?', [voucherId, sukienId]);
    return rows[0];
};

const create = async (data) => {
    const { ID_VOUCHER, ID_SUKIEN, SOLUONGVOUCHER } = data;
    const [result] = await db.query(
        'INSERT INTO VOUCHER_SUKIEN (ID_VOUCHER, ID_SUKIEN, SOLUONGVOUCHER) VALUES (?, ?, ?)',
        [ID_VOUCHER, ID_SUKIEN, SOLUONGVOUCHER]
    );
    return result.insertId;
};

const update = async (voucherId, sukienId, data) => {
    const { SOLUONGVOUCHER } = data;
    await db.query(
        'UPDATE VOUCHER_SUKIEN SET SOLUONGVOUCHER = ? WHERE ID_VOUCHER = ? AND ID_SUKIEN = ?',
        [SOLUONGVOUCHER, voucherId, sukienId]
    );
};

const remove = async (voucherId, sukienId) => {
    await db.query('DELETE FROM VOUCHER_SUKIEN WHERE ID_VOUCHER = ? AND ID_SUKIEN = ?', [voucherId, sukienId]);
};

module.exports = { getAll, getByIds, create, update, remove };