import express from "express";
import cv_make_controller from "../controllers/cvStoreController.js";
import multer from "multer"
import path from "path"
import tokenVerify from "../tokens/tokenVerify.js";
import cv_get_controller from "../controllers/cvGetController.js";
import cv_del_controller from "../controllers/cvDelController.js";

const file_ROUTE=express.Router()

const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,path.join(process.cwd(),"public","files"))
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname)
    }
})

const upload=multer({storage:storage})

file_ROUTE.post("/cvCreate",tokenVerify,upload.single("dropzone_file"),cv_make_controller)
file_ROUTE.get("/cvGet",tokenVerify,cv_get_controller)
file_ROUTE.delete("/delete/cv/:cvID",tokenVerify,cv_del_controller)

export default file_ROUTE