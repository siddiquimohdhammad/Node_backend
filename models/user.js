import mongoose from "mongoose";

const mongooseSchema = new mongoose.Schema({
  name: String,
  email: String,
  passowrd: String,
});

const Profile = mongoose.model("profile", mongooseSchema);

export default Profile;
