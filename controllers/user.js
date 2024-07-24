import jwt from "jsonwebtoken";
import Profile from "../models/user.js";
import bcrypt from "bcrypt";
import { sendCookie } from "../utils/features.js";
import { response } from "express";
export const getAllUsers = async (req, res) => {
  const users = await Profile.find({});
  console.log(req.query);

  res.json({
    sucess: true,
    users,
  });
};

export const addNewUsers = async (req, res) => {
  // const name=req.body.name;
  // const email=req.body.email;
  // const password=req.body.password;

  const { name, email, password } = req.body;

  await Profile.create({
    name,
    email,
    password,
  });

  res.json({
    sucess: true,
    message: "registered",
  });
};

export const getUserDetail = async (req, res) => {
  // const {id}=req.query
  const { id } = req.params;
  const user = await Profile.findById(id);
  // console.log(req.params)

  res.json({
    sucess: true,
    user,
  });
};



export const updateUser = async (req, res) => {
  // const {id}=req.query
  // const id=req.query.id
  const { id } = req.params;
  const user = await Profile.findById(id);
  // console.log(req.params)

  res.json({
    sucess: true,
    messgae: "Updated",
  });
};

export const deleteUser = async (req, res) => {
  // const {id}=req.query
  const { id } = req.params;
  const user = await Profile.findById(id);
  await user.deleteOne();
  // console.log(req.params)

  res.json({
    sucess: true,
    messgae: "deleted",
  });
};

export const login=async (req,res)=>{
  const {email,password}=req.body
  const profile=await Profile.findOne({email}).select("+password")

  if (!profile)
    return res.status(404).json({
      sucess: false,
      message: "Not exist",
    });

    const isMatch=await bcrypt.compare(password,profile.password)

    if (!isMatch)
      return res.status(404).json({
        sucess: false,
        message: "Not exist",
      });

      sendCookie(profile,res,`welcome back, ${profile.name}`,200)
}


export const register = async (req, res) => {
  const { name, email, password } = req.body;

  let profile = await Profile.findOne({ email });

  if (profile)
    return res.status(404).json({
      sucess: false,
      message: "Already Registered",
    });

  const hashPassword = await bcrypt.hash(password, 10);

  profile = await Profile.create({
    name,
    email,
    password: hashPassword,
  });
  
  sendCookie(profile,res, "success",201)
};

export const getMyDetails= (req,res)=>{
  
    res.status(200).json({

      success: true,
      profile:req.profile,
    });

    // res.locals.profile=profile

}

//   export default  getAllUsers
