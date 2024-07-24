import mongoose from "mongoose";

const mongooseSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true,
    unique:true,
    
    
  },

  // email: String,
  email:{
    type:String,
    required:true,
    unique:true,
    
    
  },

  password: {
    type:String,
    required:true,
    select:false,
  },

  createdAt:{
    type:Date,
    default:Date.now,
  }
  
});

const Profile = mongoose.model("profile", mongooseSchema);

export default Profile;
