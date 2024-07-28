import Task from "../models/task.js"


export const newTask=async(req,res)=>{

   const {title,description}=req.body
   await Task.create({
        title,
        description,
        user:req.profile,
   })

   res.status(201).json({
    success:true,
    message:"success task added"
   })
}


export const getMyTask=async(req,res)=>{
    const userid=req.profile._id
    const task=await Task.find({user:userid})

    res
    .status(200)
    .json({
        success:true,
        task,
    })

}

export const updateTask=async(req,res)=>{

  const { id } = req.params;

  const task=await Task.findById(id)

  task.isCompleted=!task.isCompleted

  await task.save()

  res.status(200).json({
    success:true
  })

}

export const deleteTask = async (req, res) => {
    const { id } = req.params;
  
    try {
      const task = await Task.findById(id);
  
      if (!task) {
        return res.status(404).json({
          success: false,
          message: "Task not found"
        });
      }
  
      await task.deleteOne();
  
      res.json({
        success: true,
        message: "Task deleted"
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Server error"
      });
    }
  };
  