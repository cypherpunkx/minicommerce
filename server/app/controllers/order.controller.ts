import { Request, Response } from "express";
import db from "../../app/models";

const Order = db.orders;

export default {
  findOrder: (req: Request, res: Response) => {
    const id = +req.params.id;

    Order.aggregate([
      {
        $match: {
          user_id: id,
        },
      },
      {
        $lookup: {
          from: "products",
          localField: "cart_items",
          foreignField: "code",
          as: "products",
        },
      },
    ])
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(409).send({
          message: err.message || "Some error white retrieving products",
        });
      });
  },
  addToCard: (req: Request, res: Response) => {
    const id = +req.params.id;
    const productCode = req.body.product;

    Order.updateOne(
      {
        user_id: id,
      },
      {
        $addToSet: {
          cart_items: productCode,
        },
      }
    )
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(404).send({
          message: err.message,
        });
      });
  },
  remoteFromCart: (req: Request, res: Response) => {
    const id = +req.params.id;
    const productCode = req.params.product;

    Order.updateOne(
      {
        user_id: id,
      },
      {
        $pull: {
          cart_items: productCode,
        },
      }
    )
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(404).send({
          message: err.message,
        });
      });
  },
};
