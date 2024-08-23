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
        const { ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, LOAITROCHOI } = data;
        const result = await db.query(
            'INSERT INTO SUKIEN (ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, LOAITROCHOI) VALUES (?, ?, ?, ?, ?, ?)',
            [ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, LOAITROCHOI]
        );
        return result.insertId;
    };

    static update = async (id, data) => {
        const { ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, LOAITROCHOI } = data;
        await db.query(
            'UPDATE SUKIEN SET ID_THUONGHIEU = ?, TENSUKIEN = ?, HINHANH = ?, TGBATDAU = ?, TGKETTHUC = ?, LOAITROCHOI = ? WHERE ID_SUKIEN = ?',
            [ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, LOAITROCHOI, id]
        );
    };

    static remove = async (id) => {
        await db.query('DELETE FROM SUKIEN WHERE ID_SUKIEN = ?', [id]);
    };

    static getComingEvents = async (now) => {
        const results = await db.query('SELECT * FROM SUKIEN WHERE TGKETTHUC >= ?', [now]);
        return results;
    };

    static getPastEvents = async (now) => {
        const results = await db.query('SELECT * FROM SUKIEN WHERE TGKETTHUC < ?', [now]);
        return results;
    };

    static searchByTerm = async (term) => {
        // Escape special characters to avoid SQL injection
        const escapedTerm = `%${term.replace(/%/g, '\\%').replace(/_/g, '\\_')}%`;
        const results = await db.query('SELECT * FROM SUKIEN WHERE TENSUKIEN LIKE ?', [escapedTerm]);
        return results;
    };

    static getComingEventsByBrand = async (idThuongHieu, now) => {
        const results = await db.query(
            'SELECT * FROM SUKIEN WHERE ID_THUONGHIEU = ? AND TGKETTHUC >= ?',
            [idThuongHieu, now]
        );
        return results;
    };

    static getPastEventsByBrand = async (idThuongHieu, now) => {
        const results = await db.query(
            'SELECT * FROM SUKIEN WHERE ID_THUONGHIEU = ? AND TGKETTHUC < ?',
            [idThuongHieu, now]
        );
        return results;
    };

    static async countHappeningEvents(now) {
        const results = await db.query(
            'SELECT COUNT(*) AS count FROM SUKIEN WHERE  TGBATDAU <= ? AND TGKETTHUC >= ?',
            [now, now]);
        return results[0].count;
    }


    static async countHappeningEventsByBrand(idThuongHieu, now) {
        const results = await db.query(
            'SELECT COUNT(*) AS count FROM SUKIEN WHERE ID_THUONGHIEU = ? AND TGBATDAU <= ? AND TGKETTHUC >= ?',
            [idThuongHieu, now, now]);
        return results[0].count;
    }

}

module.exports = SuKien;
