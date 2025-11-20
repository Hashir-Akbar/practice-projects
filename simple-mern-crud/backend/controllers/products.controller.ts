import { type Request, type Response } from "express";
import asyncHandler from "express-async-handler";
import { Product } from "../models/ProductModel.ts";
import { z, ZodError } from "zod";

const ProductSchema = z
  .object({
    name: z.string().optional(),
    price: z.number().optional(),
    imageUrl: z.string().optional(),
    tag: z.string().optional(),
  })
  .strict();

export const createProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const { name, price, imageUrl, tag } = req.body;

    if (!name || !price || !imageUrl || !tag) {
      res.status(400);
      throw new Error("All fields are required");
    }

    const product = await Product.create(req.body);
    res.send({ message: "Product Created Successfully", data: product });
  }
);

export const getSingleProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      res.status(400);
      throw new Error("Id is required");
    }

    const product = await Product.findById(id);

    if (!product) {
      res.status(404);
      throw new Error("Product Not Found");
    }
    res.send({ data: product });
  }
);

export const getAllProducts = asyncHandler(
  async (req: Request, res: Response) => {
    const products = await Product.find({});
    res.send({ data: products });
  }
);

export const deleteProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      res.status(400);
      throw new Error("Id is required");
    }

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      res.status(404);
      throw new Error("Product Not Found");
    }
    res.send({ message: "Successfully Deleted", data: product });
  }
);


export const updateProduct = asyncHandler(
  async (req: Request, res: Response) => {
    const { id } = req.params;

    if (!id) {
      res.status(400);
      throw new Error("Id is required");
    }

    const parsed = ProductSchema.safeParse(req.body);

    if (!parsed.success) {
      if (parsed.error instanceof ZodError) {
        res.status(400);
        throw new Error("Invalid request body");
      }

      res.status(400);
      throw new Error("Invalid request body");
    }

    const product = await Product.findByIdAndUpdate(id, parsed.data, {
      new: true,
    });

    if (!product) {
      res.status(404);
      throw new Error("Product Not Found");
    }

    res.send({ message: "Successfully Updated", data: product });
  }
);
