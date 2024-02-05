import { Request, Response } from "express";
import db from "../../app/models";

const Product = db.products;

export default {
  findAll: (req: Request, res: Response) => {
    Product.find()
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(409).send(err);
      });
  },
  findOne: (req: Request, res: Response) => {
    Product.findOne({
      code: req.params.id,
    })
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.status(409).send(err);
      });
  },
};
