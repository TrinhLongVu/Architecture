const db = require('../dbs/mysql.dbs');

class Choice {
    // Method to get all choices
    static getAll = async () => {
        const results = await db.query('SELECT * FROM CHOICE');
        return results;
    };

    // Method to get a choice by its ID
    static getById = async (id) => {
        const results = await db.query('SELECT * FROM CHOICE WHERE ID_CHOICE = ?', [id]);
        return results[0];
    };

    // Method to get all choices for a specific question
    static getByQuestionId = async (questionId) => {
        const results = await db.query('SELECT * FROM CHOICE WHERE ID_QUESTION = ?', [questionId]);
        return results;
    };

    // Method to create a new choice
    static create = async (data) => {
        const { ID_QUESTION, TEXT, IS_CORRECT } = data;
        const result = await db.query(
            'INSERT INTO CHOICE (ID_QUESTION, TEXT, IS_CORRECT) VALUES (?, ?, ?)',
            [ID_QUESTION, TEXT, IS_CORRECT]
        );
        return result.insertId;
    };

    // Method to update a choice
    static update = async (id, data) => {
        const { TEXT, IS_CORRECT } = data;
        await db.query(
            'UPDATE CHOICE SET TEXT = ?, IS_CORRECT = ? WHERE ID_CHOICE = ?',
            [TEXT, IS_CORRECT, id]
        );
    };

    // Method to delete a choice
    static remove = async (id) => {
        await db.query('DELETE FROM CHOICE WHERE ID_CHOICE = ?', [id]);
    };
}

module.exports = Choice;
