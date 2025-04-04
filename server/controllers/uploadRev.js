import review_model from "../schema/reviewSchema.js";

const uploadRev=async(req,res)=>{
    let result=null;
    try {
        result=await review_model.findOne({user:req.user.i_d})
        if(!result)
        {
            result=await review_model.create({user:req.user.i_d,name:req.body.name,stars:req.body.stars,revMsg:req.body.revMsg})
        }
        else
        {
            result=await review_model.updateOne({user:req.user.i_d},{name:req.body.name,stars:req.body.stars,revMsg:req.body.revMsg})
        }
        res.send("Successfully Submitted the Review")
    } catch (error) {
        res.status(404).send(error.message)
    }
}


export default uploadRev;