import express from "express"
const router2 = express.Router();

router2.get("/product/:items",(req,res)=>{
    
    console.log("this isdsfds query",req.params.items)
    res.send("nice")

})

export default router2
