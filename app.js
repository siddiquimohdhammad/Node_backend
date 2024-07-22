import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/user.js";
import producrRouter from "./routes/product.js";
import {config} from "dotenv"

const app = express();

config({
  path:"./data/config.env",
})

app.use(express.json());
app.use("/users",userRouter);  //users will be default for all userRouter path
app.use(producrRouter);

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "users",
  })
  .then(() => {
    console.log("DB connected");
  });

app.listen(process.env.PORT, () => {
  console.log("started");
});
