import mongoose from "mongoose";
import validator from "validator"
import bcrypt from "bcryptjs"

const user_reg_schema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        validate:[validator.isEmail,"Please provide a valid Email ID"]
    },
    password:{
        type:String,
        required:true,
        validate:[validator.isStrongPassword,"Please provide a strong password that has minimum 8 characters, a number, a special symbol, a lowercase character, and an uppercase character."]
    },
    confirm_password:{
        type:String,
        validate:{
            validator:function(value){
                return value===this.password
            },
            message:"Passwords do not match each other"
        }
    }

})

user_reg_schema.pre("save",async function(next){
    if(!this.isModified("password"))
    {
        next()
    }
    const hash=await bcrypt.hash(this.password,10)
    this.password=hash
    this.confirm_password=undefined
})

const user_model=mongoose.model("users",user_reg_schema)

export default user_model

