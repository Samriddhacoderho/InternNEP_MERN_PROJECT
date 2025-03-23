import mongoose, { Schema, set } from "mongoose";
import validator from "validator"

const reviewSchema=new mongoose.Schema({
    user:{
        type:Schema.Types.ObjectId,
        ref:"users",
        required:true
    },
    name:{
        type:String,
        required:true
    },
    stars:{
        type:Number,
        required:true
    },
    revMsg:{
        type:String,
        required:true,
        set:(value)=>validator.trim(value)  //set euta mongoose schema kai option ho jasle value lai save garihalnu agi lets us set or modify some changes. ani there we used validator js ko trim wala method, which removes additional whitespaces, from hamro program. 
    }
},
{timestamps:true}
)


const review_model=mongoose.model("reviews",reviewSchema)


export default review_model;
