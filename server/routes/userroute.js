import e from "express";
import registerController from "../controllers/RegisterControllers.js";
import loginController from "../controllers/loginControllers.js";
import tokenVerify from "../tokens/tokenVerify.js";
import patchProfile from "../controllers/patchProfileController.js";
import patchPassword from "../controllers/patchEditPasswordController.js";
import patchResetPass from "../controllers/patchResetPasswordController.js";
import uploadRev from "../controllers/uploadRev.js";
import getRevs from "../controllers/getRevsController.js";

const UserRoute = e.Router();

UserRoute.post("/register", registerController);
UserRoute.post("/login",loginController)
UserRoute.patch("/change-password",tokenVerify,patchPassword)
UserRoute.patch("/edit-profile",tokenVerify,patchProfile)
UserRoute.patch("/reset-password",tokenVerify,patchResetPass)
UserRoute.patch("/reset-password/noLog",patchResetPass)
UserRoute.post("/uploadRev",tokenVerify,uploadRev)
UserRoute.get("/getRevs",getRevs)

export default UserRoute;
