import { configDotenv } from "dotenv";
import mongoose from "mongoose";
configDotenv();

const connectTo = async () => {
  await mongoose
    .connect(process.env.URI)
    .then(() => console.log("Successfully connected to database"))
    .catch((e) => console.log(e.message));
};

export default connectTo;
