import express from "express";
import email_controller from "../controllers/emailController.js";
import tokenVerify from "../tokens/tokenVerify.js";

const email_route=express.Router()

email_route.post("/password",tokenVerify,email_controller)

export default email_route