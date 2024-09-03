const db = require('../dbs/mysql.dbs');

class Question {
    // Method to get all questions
    static getAll = async () => {
        const results = await db.query('SELECT * FROM QUESTION');
        return results;
    };

    // Method to get a question by its ID
    static getById = async (id) => {
        const results = await db.query('SELECT * FROM QUESTION WHERE ID_QUESTION = ?', [id]);
        return results[0];
    };

    // Method to get all questions for a specific quiz
    static getByQuizId = async (quizId) => {
        const results = await db.query('SELECT * FROM QUESTION WHERE ID_QUIZ = ?', [quizId]);
        return results;
    };

    // Method to create a new question
    static createWithoutVoice = async (data) => {
        const { ID_QUIZ, TEXT } = data;
        const result = await db.query(
            'INSERT INTO QUESTION (ID_QUIZ, TEXT) VALUES (?, ?)',
            [ID_QUIZ, TEXT]
        );
        return result.insertId;
    };

    // Method to update a question
    static update = async (id, data) => {
        const { VOICE, TEXT } = data;
        await db.query(
            'UPDATE QUESTION SET VOICE = ?, TEXT = ? WHERE ID_QUESTION = ?',
            [VOICE, TEXT, id]
        );
    };

    // Method to delete a question
    static remove = async (id) => {
        await db.query('DELETE FROM QUESTION WHERE ID_QUESTION = ?', [id]);
    };

    // Method to create a new question
    static create = async (data) => {
        const { ID_QUIZ, VOICE, TEXT } = data;
        const result = await db.query(
            'INSERT INTO QUESTION (ID_QUIZ, VOICE, TEXT) VALUES (?, ?, ?)',
            [ID_QUIZ, VOICE, TEXT]
        );
        return result.insertId;
    };

    // Method to update the VOICE field in the database
    static updateVoice = async (id, voiceUrl) => {
        await db.query(
            'UPDATE QUESTION SET VOICE = ? WHERE ID_QUESTION = ?',
            [voiceUrl, id]
        );
    };
}

module.exports = Question;
