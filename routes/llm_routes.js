import { Router } from 'express';
import { fetchSummary } from '../controllers/llm_controller.js';

const llmRouter = Router();

llmRouter.post('/fetch_summary', fetchSummary);

export default llmRouter;
