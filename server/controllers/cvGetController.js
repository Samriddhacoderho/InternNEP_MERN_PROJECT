import mongoose from "mongoose";

const cv_get_controller=async(req,res)=>{
    try {
        res.send("Hi")
    } catch (error) {
        res.status(404).send("Bye")
    }
}


export default cv_get_controller