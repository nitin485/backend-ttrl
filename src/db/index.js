// 2nd way to connect to the database by module approach......

import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB= async()=>{
    try {
       const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       console.log(` \n conneced successfully.....!! DB HOST : ${connectionInstance.connection.host}`)


    } catch (error) {
        console.log("database connection failed...",error)
    }
}

export default connectDB;