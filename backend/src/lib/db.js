import mongoose from "mongoose";

import "dotenv/config"

export async function connectDb (){

    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("MongoDB connected")
    }
    catch(e){
        console.log("Error in connection MongoDb",e);
    }
}