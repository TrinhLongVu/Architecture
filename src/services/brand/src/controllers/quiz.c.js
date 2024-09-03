const Quiz = require('../models/quiz.m');
const Question = require('../models/question.m');
const Choice = require('../models/choice.m');
const gTTS = require('gtts');
const uploadAudioToCloudinary = require('../utils/uploadAudioToCloudinary');



class QuizController {
    // [GET] /api/v1/quiz
    async getAllQuizzes(req, res) {
        try {
            const quizzes = await Quiz.getAll();
            res.status(200).json(quizzes);
        } catch (err) {
            console.error('Error retrieving quizzes:', err);
            res.status(500).json({ error: 'An error occurred while retrieving quizzes' });
        }
    }

    // [GET] /api/v1/quiz/:id
    async getQuizById(req, res) {
        try {
            const { id } = req.params;

            const quiz = await Quiz.getById(id);
            if (!quiz) {
                return res.status(404).json({ error: 'Quiz not found' });
            }

            const questions = await Question.getByQuizId(id);

            const questionsWithChoices = await Promise.all(questions.map(async (question) => {
                const choices = await Choice.getByQuestionId(question.ID_QUESTION);
                return {
                    ...question,
                    choices
                };
            }));

            res.status(200).json({
                ...quiz,
                questions: questionsWithChoices
            });
        } catch (err) {
            console.error('Error retrieving quiz details:', err);
            res.status(500).json({ error: 'An error occurred while retrieving quiz details' });
        }
    }

    // [POST] /api/v1/quiz
    async createQuiz(req, res) {
        const { ID_SUKIEN, questions } = req.body; // Expect questions array
    
        try {
            // Create the quiz
            const newQuizId = await Quiz.create({ ID_SUKIEN });
    
            // Create questions and choices
            for (const question of questions) {
                const { questionText, choices, correctAnswerIndex } = question;
    
                // Create question without VOICE initially
                const newQuestionId = await Question.createWithoutVoice({
                    ID_QUIZ: newQuizId,
                    TEXT: questionText,
                });
    
                // Generate text to speech
                const gtts = new gTTS(questionText, 'en');
                const audioBuffer = await new Promise((resolve, reject) => {
                    const stream = gtts.stream();
                    const chunks = [];
                    stream.on('data', chunk => chunks.push(chunk));
                    stream.on('end', () => resolve(Buffer.concat(chunks)));
                    stream.on('error', reject);
                });
    
                // Upload to Cloudinary
                const audioUrl = await uploadAudioToCloudinary(audioBuffer);
    
                // Update the question with the VOICE URL
                await Question.updateVoice(newQuestionId, audioUrl);
    
                // Create choices for the question
                for (const [index, choiceText] of choices.entries()) {
                    await Choice.create({
                        ID_QUESTION: newQuestionId,
                        TEXT: choiceText,
                        IS_CORRECT: index === correctAnswerIndex,
                    });
                }
            }
    
            res.status(201).json({ id: newQuizId });
        } catch (err) {
            console.error('Error creating quiz:', err);
            res.status(500).json({ error: 'An error occurred while creating the quiz' });
        }
    }

    // [GET] /api/v1/quiz/EventId/:id
    async getQuizByEventId(req, res) {
        try {
            const { id } = req.params;

            const quiz = await Quiz.getByEventId(id);

            if (!quiz) {
                return res.status(404).json({ error: 'No quiz found for this event' });
            }

            const questions = await Question.getByQuizId(quiz.ID_QUIZ);

            const questionsWithChoices = await Promise.all(questions.map(async (question) => {
                const choices = await Choice.getByQuestionId(question.ID_QUESTION);
                return {
                    ...question,
                    choices
                };
            }));

            const quizWithDetails = {
                ...quiz,
                questions: questionsWithChoices
            };

            res.status(200).json(quizWithDetails);
        } catch (err) {
            console.error('Error retrieving quiz by event ID:', err);
            res.status(500).json({ error: 'An error occurred while retrieving quiz by event ID' });
        }
    }


    // [DELETE] /api/v1/quiz/EventId/:id
    async deleteQuizByEventId(req, res) {
        try {
            const { id } = req.params;

            const quiz = await Quiz.getByEventId(id);

            if (quiz.length === 0) {
                return res.status(404).json({ error: 'No quiz found for the given event ID' });
            }


            const questions = await Question.getByQuizId(quiz.ID_QUIZ);

            for (const question of questions) {
                // Fetch choices for the question
                const choices = await Choice.getByQuestionId(question.ID_QUESTION);

                // Delete each choice
                for (const choice of choices) {
                    await Choice.remove(choice.ID_CHOICE);
                }

                // Delete the question
                await Question.remove(question.ID_QUESTION);
            }

            // Delete the quiz
            await Quiz.remove(quiz.ID_QUIZ);

            res.status(200).json({ message: 'Quiz and associated data successfully deleted' });
        } catch (err) {
            console.error('Error deleting quiz by event ID:', err);
            res.status(500).json({ error: 'An error occurred while deleting quiz by event ID' });
        }
    }


}

module.exports = new QuizController();
