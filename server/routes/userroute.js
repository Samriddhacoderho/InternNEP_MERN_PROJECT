import e from "express";
import registerController from "../controllers/RegisterControllers.js";
import loginController from "../controllers/loginControllers.js";
import tokenVerify from "../tokens/tokenVerify.js";
import patchPassword from "../controllers/patchPasswordController.js";

const UserRoute = e.Router();

UserRoute.post("/register", registerController);
UserRoute.post("/login",loginController)
UserRoute.patch("/change-password",tokenVerify,patchPassword)

export default UserRoute;
