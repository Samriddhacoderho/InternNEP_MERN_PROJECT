import mongoose from "mongoose";
import express from "express";
import user_model from "../schema/UserRegSchema.js";
import bcrypt from "bcryptjs";

const patchPassword=async(req,res)=>{
    try {
        const response=await user_model.findById(req.user.i_d)
        if(!await bcrypt.compare(req.body.password,response.password))
        {
            return res.status(404).send("Your current password was incorrect")
        }
        else if(await bcrypt.compare(req.body.new_password,response.password))
        {
            return res.status(404).send("New and old passwords cannot be the same.")
        }
        else
        {
            response.password=req.body.new_password
            response.save()
            res.send("Your password was successfully changed.")
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export default patchPassword