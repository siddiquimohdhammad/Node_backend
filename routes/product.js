import express from "express"
const router2 = express.Router();

router2.get("/product",(req,res)=>{
    res.send("nice")

})

export default router2
