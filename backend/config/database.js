import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "./backend/config/config.env" });

const encodedPassword = encodeURIComponent(process.env.MONGO_PASSWORD);
// MongoDB connection URI
const MONGO_URI = `mongodb+srv://rohitshendurkar2017:${encodedPassword}@cluster0.cjmijid.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

export const connectDatabase = () => {
  mongoose
    .connect(MONGO_URI)
    .then((c) => {
      console.log(`Mongodb connect to: ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e.message);
    });
};
