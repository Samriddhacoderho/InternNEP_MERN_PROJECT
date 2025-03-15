import express from "express";
import user_model from "../schema/UserRegSchema.js";
import jwt from 'jsonwebtoken'
import bcrypt from "bcryptjs"

const loginController=async(req,res)=>{
    try {
        const {email,password}=req.body
        const result=await user_model.findOne({email})
        if(!await bcrypt.compare(password,result.password))
        {
            res.status(404).send("Invalid email ID or Password")
        }
        else
        {
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
            res.send("Logged In Successfully")
        }

    } catch (error) {
        res.status(404).send("Invalid email ID or Password")
    }
}

export default loginController