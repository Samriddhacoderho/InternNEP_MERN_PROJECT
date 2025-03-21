import mongoose, { Schema } from "mongoose";

const cvSchema=new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    fileName:{
        type:String,
        requied:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const cv_model=mongoose.model("cvs",cvSchema)


export default cv_model