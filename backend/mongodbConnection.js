import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnection = await mongoose.connect(process.env.MongoDBURI);


export default dbConnection;