const db = require('../db');

const getAll = async () => {
    const [rows] = await db.query('SELECT * FROM SUKIEN');
    return rows;
};

const getById = async (id) => {
    const [rows] = await db.query('SELECT * FROM SUKIEN WHERE ID_SUKIEN = ?', [id]);
    return rows[0];
};

const create = async (data) => {
    const { ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, TONGSOVOUCHER } = data;
    const [result] = await db.query(
        'INSERT INTO SUKIEN (ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, TONGSOVOUCHER) VALUES (?, ?, ?, ?, ?, ?)',
        [ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, TONGSOVOUCHER]
    );
    return result.insertId;
};

const update = async (id, data) => {
    const { ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, TONGSOVOUCHER } = data;
    await db.query(
        'UPDATE SUKIEN SET ID_THUONGHIEU = ?, TENSUKIEN = ?, HINHANH = ?, TGBATDAU = ?, TGKETTHUC = ?, TONGSOVOUCHER = ? WHERE ID_SUKIEN = ?',
        [ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, TONGSOVOUCHER, id]
    );
};

const remove = async (id) => {
    await db.query('DELETE FROM SUKIEN WHERE ID_SUKIEN = ?', [id]);
};

module.exports = { getAll, getById, create, update, remove };