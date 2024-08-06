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
        const { TENTHUONGHIEU, DIACHI, AVATAR } = data;
        const result = await db.query(
            'INSERT INTO THUONGHIEU (TENTHUONGHIEU, DIACHI, AVATAR) VALUES (?, ?, ?)',
            [TENTHUONGHIEU, DIACHI, AVATAR]
        );
        return result.insertId;
    };

    static update = async (id, data) => {
        const { TENTHUONGHIEU, DIACHI, AVATAR } = data;
        await db.query(
            'UPDATE THUONGHIEU SET TENTHUONGHIEU = ?, DIACHI = ?, AVATAR = ? WHERE ID_THUONGHIEU = ?',
            [TENTHUONGHIEU, DIACHI, AVATAR, id]
        );
    };

    static remove = async (id) => {
        await db.query('DELETE FROM THUONGHIEU WHERE ID_THUONGHIEU = ?', [id]);
    };
}

module.exports = ThuongHieu;
