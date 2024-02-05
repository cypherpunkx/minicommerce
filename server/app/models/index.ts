import dbConfig from "../../config/db.config";
import mongoose from "mongoose";
import productModel from "./product.model.ts";
import orderModel from "./order.model.ts";

mongoose.Promise = global.Promise;

const db = {
  mongoose,
  url: dbConfig.url,
  products: productModel(mongoose),
  orders: orderModel(mongoose),
};

export default db;
