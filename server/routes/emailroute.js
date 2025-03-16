import express from "express";
import email_controller from "../controllers/emailController.js";

const email_route=express.Router()

email_route.post("/nodemailer",email_controller)

export default email_route