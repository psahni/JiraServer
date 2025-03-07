import { Router } from 'express';
import { publishConfluencePage } from '../controllers/publish_controller.js';

const confluenceRouter = Router();

confluenceRouter.post('/publish_confluence_page', publishConfluencePage);

export default confluenceRouter;

