import mongoose from "mongoose";

const mongooseSchema = new mongoose.Schema({
  title: String,

  description: {
    type: String,
    unique: true,
  },

  isCompleted: {
    type: Boolean,
    default: false,
  },

  user:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"profile",
    require:true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const task = mongoose.model("task", mongooseSchema);

export default task;
