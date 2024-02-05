import { Mongoose } from "mongoose";

interface Order {
  user_id: number;
  cart_items: string[];
}

export default (mongoose: Mongoose) => {
  const schema = new mongoose.Schema<Order>({
    user_id: Number,
    cart_items: [String],
  });

  schema.method("toJSON", function () {
    const object = {
      id: this.toObject()._id,
      ...this.toObject(),
    };

    return object;
  });

  const Order = mongoose.model("Orders", schema);

  return Order;
};
