import "dotenv/config";
import express from "express";
import cors from "cors";
import db from "./app/models";
import productRoute from "./app/routes/product.route";
import orderRoute from "./app/routes/order.route";
import path from "path";

const PORT = process.env.PORT ?? 8000;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/img", express.static(path.join(__dirname, "./public/img")));

db.mongoose
  .connect(db.url as string)
  .then(() => {
    console.log("Database Connected!");
  })
  .catch((err) => {
    console.log("Cannot connect to database!", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({
    message: "Welcome to vuestore-server",
  });
});

productRoute(app);
orderRoute(app);

app.listen(PORT, () =>
  console.log(`running at server http://localhost:${PORT}`)
);
