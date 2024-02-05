import productController from "../controllers/product.controller";
import { Application, Router } from "express";

export default (app: Application) => {
  const products = productController;
  const router = Router();

  router.get("/", products.findAll);
  router.get("/:id", products.findOne);

  app.use("/api/products", router);
};
