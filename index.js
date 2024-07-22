import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser())


mongoose
  .connect("mongodb://localhost:27017", {
    dbName: "backend",
  })
  .then(() => {
    console.log("DB connected");
  })
  .catch((e) => {
    console.log(e);
  });

const mongooseSchema = new mongoose.Schema({
  name: String,
  email: String,
});

const Message = mongoose.model("Message", mongooseSchema);



// Using promises .then chaining
// app.get("/add",(req,res)=>{
//     Message.create({name:"Hammad",email:"sidhammad@gmaul.com"})
//     .then(()=>{
//         console.log("nice")
//     })
// })

// Using async await
app.get("/add", async (req, res) => {
  await Message.create({ name: "talha", email: "talha72@gmaul.com" });

  console.log("nice");
});

app.get("/home", (req, res) => {
  res.send("hii");
  // res.json({
  //     succes:true,
  //     products:["tea","milk"]
  // })
});

app.get("/",(req,res)=>{
    const {token}=req.cookies
    // console.log(req.cookies.token);
    if (token){
        res.send("login")
        console.log("login")
    }
    else{
        res.send("logout")
        console.log("logout")

    }
    res.render("login")
})

app.post("/login", (req,res)=>{
    res.cookie("token0","success",{
        httpOnly:true,express:new Date(Date.now()+60*1000),
    });
    res.send("Cookie set")
    
})


// const mongooseSchema = new mongoose.Schema({
//     name: String,
//     email: String,
//     passowrd:String,
//   });
  
//   const Profile = mongoose.model("profile", mongooseSchema);

//   app.get("/add", async (req, res) => {
//     await Profile.create({ name: "tauseeb", email: "talha72@gmaul.com" });
  
//     console.log("nice");
//   });

// app.get("/users/all",async (req,res)=>{
//     const users = await Profile.find({})
//     console.log(req.query)

//     res.json({
//         sucess:true,
//         users
//     })


// })

// app.post("/users/new",async (req,res)=>{
//     // const name=req.body.name;
//     // const email=req.body.email;
//     // const password=req.body.password;

//     const {name,email,password}=req.body;
    

//     await Profile.create({
//         name,
//         email,
//         password
//     })


//     // const users=await Profile.create({
//     //     name:"arkam",
//     //     email:"hsjfd@gmail.com",
//     //     password:"arkam415"
//     // })

//     res.json({
//         sucess:true,
//         message:"registered"
//     })
// })
app.listen(3000, () => {
  console.log("listening");
});
