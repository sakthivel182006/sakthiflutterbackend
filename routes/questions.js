import express from 'express';
import {
  createQuestion,
  getQuestions,
  getQuestion,
  updateQuestion,
  deleteQuestion
} from '../controllers/questionController.js';

const router = express.Router();

router.route('/')
  .get(getQuestions)
  .post(createQuestion);

router.route('/:id')
  .get(getQuestion)
  .put(updateQuestion)
  .delete(deleteQuestion);

export default router;