import user_model from "../schema/UserRegSchema.js";

const patchProfile=async(req,res)=>{
    try {
        const result=await user_model.findById(req.user.i_d)
        if(req.body.name===result.name)
        {
            return res.status(404).send("New username cannot be the same as old one.")
        }
        else
        {
            result.name=req.body.name
            await result.save()
            res.send("Your username was successfully changed.")
        }
    } catch (error) {
        return res.status(404).send(error.message)
    }
}


export default patchProfile