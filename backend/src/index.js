import dotenv from "dotenv";
import connectToDatabase from "./config/database.js";
import express from "express";
import categoryRoutes from "./routes/category-routes.js";

dotenv.config();
connectToDatabase();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

app.use("/categories", categoryRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
