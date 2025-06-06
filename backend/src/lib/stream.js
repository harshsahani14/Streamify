import {StreamChat} from "stream-chat"
import "dotenv/config"

const apiKey = process.env.STREAM_API_KEY
const apiSecret = process.env.STREAM_API_SECRET

if(!apiKey || !apiSecret){
    console.error("Stream API key and secret are missing")
}

const streamClient = StreamChat.getInstance(apiKey,apiSecret)

export const upsertUser = async (userData)=>{

    try{
        await streamClient.upsertUsers([userData]);
        return userData
    }
    catch(e){
        console.error("Error while creating user on stream", e)
    }
}

export const generateStreamToken = (userId)=>{

    try{
        const userIdStr = userId.toString(userId)

        return streamClient.createToken(userIdStr)
    }
    catch(e){
        console.error("Error while creating token in stream", e)
    }
}



