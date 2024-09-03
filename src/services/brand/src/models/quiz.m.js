const db = require('../dbs/mysql.dbs');

class Quiz {
    static getAll = async () => {
        const results = await db.query('SELECT * FROM QUIZ');
        return results;
    };

    static getById = async (id) => {
        const results = await db.query('SELECT * FROM QUIZ WHERE ID_QUIZ = ?', [id]);
        return results[0];
    };

    static getByEventId = async (eventId) => {
        const results = await db.query('SELECT * FROM QUIZ WHERE ID_SUKIEN = ?', [eventId]);
        return results[0];
    };

    static create = async (data) => {
        const { ID_SUKIEN } = data;
        const result = await db.query(
            'INSERT INTO QUIZ ( ID_SUKIEN) VALUES ( ?)',
            [ ID_SUKIEN]
        );
        return result.insertId;
    };

    static update = async (id, data) => {
        const {  ID_SUKIEN } = data;
        await db.query(
            'UPDATE QUIZ SET  ID_SUKIEN = ? WHERE ID_QUIZ = ?',
            [ ID_SUKIEN, id]
        );
    };

    static remove = async (id) => {
        await db.query('DELETE FROM QUIZ WHERE ID_QUIZ = ?', [id]);
    };
}

module.exports = Quiz;
