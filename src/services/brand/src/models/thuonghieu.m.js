const db = require('../dbs/mysql.dbs');

class ThuongHieu {
    static getAll = async () => {
        const results = await db.query('SELECT * FROM THUONGHIEU');
        return results;
    };

    static getById = async (id) => {
        const results = await db.query('SELECT * FROM THUONGHIEU WHERE ID_THUONGHIEU = ?', [id]);
        return results[0];
    };

    static create = async (data) => {
        const { TENTHUONGHIEU, DIACHI, AVATAR, LINHVUC, ID_NGUOIDUNG } = data;
        const result = await db.query(
            'INSERT INTO THUONGHIEU (TENTHUONGHIEU, DIACHI, AVATAR, LINHVUC, ID_NGUOIDUNG) VALUES (?, ?, ?, ?, ?)',
            [TENTHUONGHIEU, DIACHI, AVATAR, LINHVUC, ID_NGUOIDUNG]
        );
        return result.insertId;
    };

    static update = async (id, data) => {
        const { TENTHUONGHIEU, DIACHI, AVATAR, LINHVUC, ID_NGUOIDUNG } = data;
        await db.query(
            'UPDATE THUONGHIEU SET TENTHUONGHIEU = ?, DIACHI = ?, AVATAR = ?, LINHVUC=?, ID_NGUOIDUNG = ? WHERE ID_THUONGHIEU = ?',
            [TENTHUONGHIEU, DIACHI, AVATAR, LINHVUC, ID_NGUOIDUNG, id]
        );
    };

    static remove = async (id) => {
        await db.query('DELETE FROM THUONGHIEU WHERE ID_THUONGHIEU = ?', [id]);
    };

    static getUserIdByBrandId = async (id) => {
        const result = await db.query('SELECT ID_NGUOIDUNG FROM THUONGHIEU WHERE ID_THUONGHIEU = ?', [id]);
        return result[0] ? { ID_NGUOIDUNG: result[0].ID_NGUOIDUNG } : null;
    };
    
    static getBrandIdByUserId = async (idNguoiDung) => {
        const result = await db.query('SELECT ID_THUONGHIEU FROM THUONGHIEU WHERE ID_NGUOIDUNG = ?', [idNguoiDung]);
        return result[0] ? { ID_THUONGHIEU: result[0].ID_THUONGHIEU } : null;
    };
    
}

module.exports = ThuongHieu;
