import review_model from "../schema/reviewSchema.js"

const getRevs=async(req,res)=>{
    try {
        const result=await review_model.find({stars:{$gte:3,$lte:5}}).limit(3).sort({updatedAt:-1})
        if(result.length)
        {
            res.json(result)
        }
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export default getRevs