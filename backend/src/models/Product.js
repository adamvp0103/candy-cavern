import mongoose, { Schema } from "mongoose";

const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  image: String,
  category: { type: Schema.Types.ObjectId, ref: "Category" },
});

const Product = mongoose.model("Product", productSchema);

export default Product;
