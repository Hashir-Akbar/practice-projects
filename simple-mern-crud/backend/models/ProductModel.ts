import mongoose from "mongoose";

const productModel = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    imageUrl: {
      type: String,
      required: true,
    },
    tag: {
      type: String,
      enum: ["Clothes", "Shoes", "Toffee"],
      required: true,
    },
  },
  {
    timestamps: true,
  }
);



export const Product = mongoose.model("Product", productModel);
