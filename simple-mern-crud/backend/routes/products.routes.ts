import { Router } from "express";
import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getSingleProduct,
  updateProduct,
} from "../controllers/products.controller.ts";

const productRoutes = Router();

productRoutes.post("/create", createProduct);
productRoutes.get("/:id", getSingleProduct);
productRoutes.put("/:id", updateProduct);
productRoutes.get("/", getAllProducts);
productRoutes.delete("/:id", deleteProduct);

export default productRoutes;
