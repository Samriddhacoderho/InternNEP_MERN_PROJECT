import e from "express";
import registerController from "../controllers/RegisterControllers.js";
import loginController from "../controllers/loginControllers.js";

const UserRoute = e.Router();

UserRoute.post("/register", registerController);
UserRoute.post("/login",loginController)

export default UserRoute;
