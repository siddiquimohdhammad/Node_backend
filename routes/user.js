import express from "express";
import  {getAllUsers, addNewUsers, getUserDetail, updateUser, deleteUser, register, login, getMyDetails } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";


const router = express.Router();

router.get("/all",getAllUsers);

router.post("/new", addNewUsers);

router.get("/userid/:id",getUserDetail)

router.put("/userid/:id",updateUser)

router.delete("/userid/:id",deleteUser)

router.post("/register",register)

router.post("/login",login)

router.get("/me",isAuthenticated, getMyDetails)


export default router;