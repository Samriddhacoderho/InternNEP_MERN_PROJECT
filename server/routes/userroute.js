import e from "express";
import registerController from "../controllers/RegisterControllers.js";

const UserRoute = e.Router();

UserRoute.post("/register", registerController);

export default UserRoute;
