import mongoose from "mongoose"
import dotenv from "dotenv"
dotenv.config()
export const connectDB=async()=>{
    await mongoose.connect(process.env.connectionurl).then(()=>{
        console.log("DataBase Connected");
    }).catch((error)=>{
        console.log("Error when Connection to DB " ,error)
    })
}