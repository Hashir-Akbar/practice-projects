import express from "express";
import env from "dotenv";
import { ConnectDb } from "./config/Connectdb.ts";
import productRoutes from "./routes/products.routes.ts";
import { errorHandler } from "./middleware/errorHandler.ts";

const app = express();
env.config();

app.use(express.json());
app.use("/api/v1/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Yobro ");
});

app.use(errorHandler);
app.listen(3001, () => {
  ConnectDb();
  console.log("listening on 3001");
});
