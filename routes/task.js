import express from "express"
import { deleteTask, getMyTask, newTask, updateTask } from "../controllers/task.js"
import { isAuthenticated } from "../middlewares/auth.js"

const router=express.Router()

router.post("/newTask",isAuthenticated,newTask)

router.get("/myTask",isAuthenticated,getMyTask)

router.delete("/task/:id",isAuthenticated,deleteTask)

router.put("/task/:id",isAuthenticated,updateTask)




export default router