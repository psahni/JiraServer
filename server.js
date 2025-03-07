import express from "express";
import auditRouter from "./routes/audit_routes.js";

const app = express();

const port = 3333;

app.use(express.json());
app.use("/audits", auditRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
}); 
