import express from "express";
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import path from 'path';
import { fileURLToPath } from 'url';

import auditRouter from "./routes/audit_routes.js";
import confluenceRouter from "./routes/confluence_routes.js";
import llmRouter from "./routes/llm_routes.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = 3333;

app.use(express.json());
app.use("/audits", auditRouter);
app.use("/confluence", confluenceRouter);
app.use("/llm", llmRouter);

// Middleware
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

// Route to render the query page
app.get('/ask', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'ask.html'));
});



app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 
