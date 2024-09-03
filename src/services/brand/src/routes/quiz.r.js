const express = require('express');
const router = express.Router();
const QuizController = require('../controllers/quiz.c');

router.get('/', QuizController.getAllQuizzes);
router.post('/', QuizController.createQuiz);
router.get('/:id', QuizController.getQuizById);
router.get('/EventId/:id', QuizController.getQuizByEventId);
router.delete('/EventId/:id', QuizController.deleteQuizByEventId);

module.exports = router;
