import mongoose from "mongoose";
import cv_model from "../schema/cvSchema.js";

const cv_make_controller=async(req,res)=>{
    try {
        const result=await cv_model.findOne({user:req.user.i_d,fileName:req.file.originalname})
        if(result)
        {
            return res.status(404).send("This file already exists.")
        }
        const res_ult=await cv_model.create({user:req.user.i_d,fileName:req.file.originalname})
        res.send("Successfully uploaded CV")
    } catch (error) {
        res.status(404).send(error.message)
    }
}


export default cv_make_controller