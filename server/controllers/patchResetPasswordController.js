import bcrypt from "bcryptjs"
import user_model from "../schema/UserRegSchema.js"

const patchResetPass=async(req,res)=>{
    try {
        const result=await user_model.findById(req.user.i_d)
        if(await bcrypt.compare(req.body.new_password,result.password))
        {
            return res.status(404).send("New and old passwords cannot be same.")
        }
        else
        {
            result.password=req.body.new_password
            await result.save()
            res.send("Password changed successfully")
        }
    } catch (error) {
       return res.status(404).send(error.message) 
    }
}

export default patchResetPass