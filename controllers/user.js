import Profile from "../models/user.js";

export const getAllUsers=async (req, res) => {
    const users = await Profile.find({});
    console.log(req.query);
  
    res.json({
      sucess: true,
      users,
    });
  }

export const addNewUsers=async (req, res) => {
    // const name=req.body.name;
    // const email=req.body.email;
    // const password=req.body.password;
  
    const { name, email, password } = req.body;
  
    await Profile.create({
      name,
      email,
      password,
    } );
  
    res.json({
      sucess: true,
      message: "registered",
    });
  }

//   export default  getAllUsers