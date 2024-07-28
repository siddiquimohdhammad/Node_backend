import jwt from "jsonwebtoken";

export const sendCookie= (profile,res,message,statusCode=200)=>{
    const token = jwt.sign({ _id: profile._id }, process.env.JWT_SECRET);
  // instead of token we can also send user id as token like this==> "profile._id"
  res
    .status(statusCode)
    .cookie("token", token, {
      httpOnly: true,
      maxAge: 60 * 60 * 1000,
      sameSite: "none",
      secure:true

    })
    .json({
      success: true,
      message
    });

}