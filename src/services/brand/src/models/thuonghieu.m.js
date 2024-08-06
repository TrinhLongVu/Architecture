const db = require('../db');

const getAll = async () => {
    const [rows] = await db.query('SELECT * FROM THUONGHIEU');
    return rows;
};

const getById = async (id) => {
    const [rows] = await db.query('SELECT * FROM THUONGHIEU WHERE ID_THUONGHIEU = ?', [id]);
    return rows[0];
};

const create = async (data) => {
    const { TENTHUONGHIEU, DIACHI, AVATAR } = data;
    const [result] = await db.query(
        'INSERT INTO THUONGHIEU (TENTHUONGHIEU, DIACHI, AVATAR) VALUES (?, ?, ?)',
        [TENTHUONGHIEU, DIACHI, AVATAR]
    );
    return result.insertId;
};

const update = async (id, data) => {
    const { TENTHUONGHIEU, DIACHI, AVATAR } = data;
    await db.query(
        'UPDATE THUONGHIEU SET TENTHUONGHIEU = ?, DIACHI = ?, AVATAR = ? WHERE ID_THUONGHIEU = ?',
        [TENTHUONGHIEU, DIACHI, AVATAR, id]
    );
};

const remove = async (id) => {
    await db.query('DELETE FROM THUONGHIEU WHERE ID_THUONGHIEU = ?', [id]);
};

module.exports = { getAll, getById, create, update, remove };