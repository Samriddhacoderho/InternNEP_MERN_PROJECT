import e from "express";
import user_model from "../schema/UserRegSchema.js";
import jwt from "jsonwebtoken"

const registerController=async(req,res)=>{
    try {
        const result=await user_model.create(req.body)
        const payload={
            user:{
                i_d:result.id
            }
        }
        const token=jwt.sign(payload,process.env.SECRET)
        res.cookie("loginToken",token,{
            secure:true,
            sameSite:"strict"
        })
        
        res.json({"success_msg":"Registered Successfully","name":result.name})
        
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export default registerController