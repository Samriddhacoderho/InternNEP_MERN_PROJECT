import nodemailer from "nodemailer";
import user_model from "../schema/UserRegSchema.js";
import fs from "fs"

const email_controller = async (req, res) => {
  let htmlContent=fs.readFileSync("htmlEmail.html","utf-8")
  const resetCode=Math.floor(100000+Math.random()*900000)
  htmlContent=htmlContent.replace("{{CODE}}",resetCode)

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.NODEMAILER_USER,
      pass: process.env.NODEMAILER_PASS,
    },
  });
  const mailOptions = {
    from: process.env.NODEMAILER_USER,
    to:req.body.email,
    subject:"Reset Password Verification Code",
    text:"Hello",
    html:htmlContent
  };
  try {
    const result=await user_model.findById(req.user.i_d)
    if(result.email!==req.body.email)
    {
      return res.status(404).send("Please enter your email address only.")
    }
    await transporter.sendMail(mailOptions)
    res.json({"success_msg":"Verification Code Sent! Check your email.","resetCode":resetCode})
  } catch (error) {
    res.status(404).send(error.message) 
  }
};

export default email_controller
