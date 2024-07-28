import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import userRouter from "./routes/user.js";
import producrRouter from "./routes/product.js";
import taskRouter from "./routes/task.js"

import {config} from "dotenv"
import cookieParser from "cookie-parser";

const app = express();

config({
  path:"./data/config.env",
})
// using middlewares
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
  origin: [process.env.FRONTEND_URL],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,
})
)

// using router
app.use("/users",userRouter);  //users will be default for all userRouter path
app.use(producrRouter);
app.use(taskRouter);



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
