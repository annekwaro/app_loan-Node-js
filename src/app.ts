import "dotenv/config";
import express from "express";
import cors from "cors";
import { lenderController } from "./controller/lender-controller";

const port = process.env.PORT || 8000;

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/lender", lenderController);

app.listen(port, () => {
  console.log("Server is listening on http://localhost:" + port);
});
