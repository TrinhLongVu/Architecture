const db = require('../db');

const getAll = async () => {
    const [rows] = await db.query('SELECT * FROM VOUCHER');
    return rows;
};

const getById = async (id) => {
    const [rows] = await db.query('SELECT * FROM VOUCHER WHERE ID_VOUCHER = ?', [id]);
    return rows[0];
};

const create = async (data) => {
    const { ID_THUONGHIEU, NGAYHETHAN, TRIGIA, TRANGTHAI, HINHANH, QRCODE, MOTA } = data;
    const [result] = await db.query(
        'INSERT INTO VOUCHER (ID_THUONGHIEU, NGAYHETHAN, TRIGIA, TRANGTHAI, HINHANH, QRCODE, MOTA) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [ID_THUONGHIEU, NGAYHETHAN, TRIGIA, TRANGTHAI, HINHANH, QRCODE, MOTA]
    );
    return result.insertId;
};

const update = async (id, data) => {
    const { ID_THUONGHIEU, NGAYHETHAN, TRIGIA, TRANGTHAI, HINHANH, QRCODE, MOTA } = data;
    await db.query(
        'UPDATE VOUCHER SET ID_THUONGHIEU = ?, NGAYHETHAN = ?, TRIGIA = ?, TRANGTHAI = ?, HINHANH = ?, QRCODE = ?, MOTA = ? WHERE ID_VOUCHER = ?',
        [ID_THUONGHIEU, NGAYHETHAN, TRIGIA, TRANGTHAI, HINHANH, QRCODE, MOTA, id]
    );
};

const remove = async (id) => {
    await db.query('DELETE FROM VOUCHER WHERE ID_VOUCHER = ?', [id]);
};

module.exports = { getAll, getById, create, update, remove };