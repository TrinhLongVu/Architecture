const db = require('../dbs/mysql.dbs');

const moment = require('moment-timezone');

// Set default timezone to Vietnam (UTC+7)
moment.tz.setDefault('Asia/Ho_Chi_Minh');

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
        const { ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC } = data;
        if(HINHANH){
            await db.query(
                'UPDATE SUKIEN SET ID_THUONGHIEU = ?, TENSUKIEN = ?, HINHANH = ?, TGBATDAU = ?, TGKETTHUC = ? WHERE ID_SUKIEN = ?',
                [ID_THUONGHIEU, TENSUKIEN, HINHANH, TGBATDAU, TGKETTHUC, id]
            );
        }else{
            await db.query(
                'UPDATE SUKIEN SET ID_THUONGHIEU = ?, TENSUKIEN = ?, TGBATDAU = ?, TGKETTHUC = ? WHERE ID_SUKIEN = ?',
                [ID_THUONGHIEU, TENSUKIEN, TGBATDAU, TGKETTHUC, id]
            );
        }
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

    static searchByTermAndBrand = async (term, idThuongHieu) => {
        const escapedTerm = `%${term.replace(/%/g, '\\%').replace(/_/g, '\\_')}%`;
        const results = await db.query('SELECT * FROM SUKIEN WHERE TENSUKIEN LIKE ? AND ID_THUONGHIEU = ?', [escapedTerm, idThuongHieu]);
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

    static async getHappeningEvents(now) {
        const results = await db.query(
            'SELECT * FROM SUKIEN WHERE  TGBATDAU <= ? AND TGKETTHUC >= ?',
            [now, now]);
            return results;
    }


    static async countHappeningEventsByBrand(idThuongHieu, now) {
        const results = await db.query(
            'SELECT COUNT(*) AS count FROM SUKIEN WHERE ID_THUONGHIEU = ? AND TGBATDAU <= ? AND TGKETTHUC >= ?',
            [idThuongHieu, now, now]);
        return results[0].count;
    }

    static async countEventsByGameTypeForLast7Days(now) {
        const startDate = moment(now).subtract(6, 'days').format('YYYY-MM-DD');
        const endDate = moment(now).format('YYYY-MM-DD');
    
        const results = await db.query(`
            SELECT 
                DATE(TGBATDAU) as date,
                SUM(CASE WHEN LOAITROCHOI = 'Trivia Quiz' THEN 1 ELSE 0 END) as HQTrivia,
                SUM(CASE WHEN LOAITROCHOI = 'Roll Dice' THEN 1 ELSE 0 END) as DiceRoll
            FROM SUKIEN
            WHERE (TGBATDAU <= ? AND TGKETTHUC >= ?)
                AND DATE(TGBATDAU) BETWEEN ? AND ?
            GROUP BY DATE(TGBATDAU)
            ORDER BY DATE(TGBATDAU) ASC
        `, [now, now, startDate, endDate]);
    
        // Fill in missing dates with zeros
        const dateRange = Array.from({ length: 7 }, (_, i) =>
            moment(startDate).add(i, 'days').format('YYYY-MM-DD')
        );
        const dateResults = dateRange.reduce((acc, date) => {
            acc[date] = { date, HQTrivia: 0, DiceRoll: 0 };
            return acc;
        }, {});
    
        results.forEach(result => {
            const date = moment(result.date).format('YYYY-MM-DD');
            const HQTrivia = parseInt(result.HQTrivia, 10);
            const DiceRoll = parseInt(result.DiceRoll, 10);
            if (dateResults[date]) {
                dateResults[date] = { date, HQTrivia, DiceRoll };
            }
        });
    
        return Object.values(dateResults);
    }
    
    
    
}

module.exports = SuKien;
