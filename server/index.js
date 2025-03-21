import express from "express";
import connectTo from "./connections/db_conn.js";
import { configDotenv } from "dotenv";
import UserRoute from "./routes/userroute.js";
import cors from "cors"
import email_route from "./routes/emailroute.js";
import cookieParser from "cookie-parser";
import file_ROUTE from "./routes/filesRoute.js";

configDotenv();

const app = express();

console.clear();

//middlewares
app.use(express.json())
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))
app.use(cookieParser())



app.use("/", UserRoute);
app.use("/",file_ROUTE)
app.use("/reset",email_route)

connectTo();

app.listen(process.env.PORT, () =>
  console.log(`This is being listened at http://localhost:${process.env.PORT}`)
);
