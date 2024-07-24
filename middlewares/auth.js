import Profile from "../models/user.js";
import jwt from "jsonwebtoken"

export const isAuthenticated=async(req,res,next)=>{
    // const id="myid"
  // console.log('Cookies:', req.cookies);
  const { token } = req.cookies;

  
  if (!token)
    return res.status(404).json({
      sucess: false,
      message: "Not logged in",
    });

    const decoded=jwt.verify(token, process.env.JWT_SECRET)
    
     req.profile=await Profile.findById(decoded._id)
     next()
}