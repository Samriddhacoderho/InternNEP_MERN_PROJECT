import cv_model from "../schema/cvSchema.js";

const cv_get_controller=async(req,res)=>{
    try {
        const result=await cv_model.find({user:req.user.i_d})
        res.json(result)
    } catch (error) {
        res.status(404).send(error.message)
    }
}


export default cv_get_controller