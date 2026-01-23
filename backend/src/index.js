import dotenv from "dotenv";
import connectToDatabase from "./config/database.js";
import express from "express";
import cors from "cors";
import categoryRoutes from "./routes/category-routes.js";
import productRoutes from "./routes/product-routes.js";

dotenv.config();
connectToDatabase();

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());
app.use(
  // http://localhost:5173 for React development only
  cors({
    origin: ["http://localhost:5173", "https://candy-cavern.netlify.app"],
    methods: "GET",
  }),
);

app.use("/categories", categoryRoutes);
app.use("/products", productRoutes);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
