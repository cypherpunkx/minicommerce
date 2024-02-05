import { Mongoose } from "mongoose";

interface Product {
  code: string;
  name: string;
  price: string;
  description: string;
  imageUrl: string;
  averageRating: number;
}

export default (mongoose: Mongoose) => {
  const schema = new mongoose.Schema<Product>({
    code: String,
    name: String,
    price: Number,
    description: String,
    imageUrl: String,
    averageRating: Number,
  });

  schema.method("toJSON", function () {
    const object = {
      id: this.toObject()._id,
      ...this.toObject(),
    };

    return object;
  });

  const Product = mongoose.model("Product", schema);

  return Product;
};
