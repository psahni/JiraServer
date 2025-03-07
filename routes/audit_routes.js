import { Router } from 'express';
import { index as auditIndex } from "../controllers/audit_controller.js";

const auditRouter = Router();

auditRouter.get('/', auditIndex);

export default auditRouter;
