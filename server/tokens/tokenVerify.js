import jwt from "jsonwebtoken"

const tokenVerify=async(req,res,next)=>{
    try {
        console.log(req.cookies.loginToken)
        const response=jwt.verify(req.cookies.loginToken,process.env.SECRET)
        req.user=response.user
        next()
    } catch (error) {
        res.status(404).send(error.message)
    }
}

export default tokenVerify