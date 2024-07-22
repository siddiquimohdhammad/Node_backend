import express from "express";
import  {getAllUsers, addNewUsers } from "../controllers/user.js";

const router = express.Router();

router.get("/all",getAllUsers);

router.post("/new", addNewUsers);

export default router;