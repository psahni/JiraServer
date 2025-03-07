import express from "express";
import dotenv from 'dotenv';
import auditRouter from "./routes/audit_routes.js";
import confluenceRouter from "./routes/confluence_routes.js";

dotenv.config();

console.log(process.env.CONFLUENCE_API_TOKEN)
const app = express();
const port = 3333;

app.use(express.json());
app.use("/audits", auditRouter);
app.use("/confluence", confluenceRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 
