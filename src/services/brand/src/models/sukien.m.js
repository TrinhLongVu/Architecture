const db = require('../dbs/mysql.dbs');

class SuKien {
    static getAll = async () => {
        const results = await db.query('SELECT * FROM SUKIEN');
        return results;
    };

    static getById = async (id) => {
        const results = await db.query('SELECT * FROM SUKIEN WHERE ID_SUKIEN = ?', [id]);
        return results[0];
    };

    static create = async (data) => {
        const { ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC } = data;
        const result = await db.query(
            'INSERT INTO SUKIEN (ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC) VALUES (?, ?, ?, ?, ?)',
            [ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC]
        );
        return result.insertId;
    };

    static update = async (id, data) => {
        const { ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC } = data;
        await db.query(
            'UPDATE SUKIEN SET ID_THUONGHIEU = ?, TENSUKIEN = ?, HINHANH = ?, TGBATDAU = ?, TGKETTHUC = ? WHERE ID_SUKIEN = ?',
            [ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, id]
        );
    };

    static remove = async (id) => {
        await db.query('DELETE FROM SUKIEN WHERE ID_SUKIEN = ?', [id]);
    };
}

module.exports = SuKien;
