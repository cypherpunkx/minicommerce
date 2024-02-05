import orderController from "../controllers/order.controller";
import { Application, Router } from "express";

export default (app: Application) => {
  const orders = orderController;
  const router = Router();

  router.get("/user/:id", orders.findOrder);
  router.post("/user/:id/add", orders.addToCard);
  router.delete("/user/:id/product/:product", orders.remoteFromCart);

  app.use("/api/orders", router);
};
