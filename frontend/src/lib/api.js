import { axiosInsance } from "./axios"

export const  signup = async(signUpData)=>{
    
    const res = await axiosInsance.post("/auth/signup",signUpData)
    return res.data
}

export const login = async(loginData)=>{
    
    const res = await axiosInsance.post("/auth/login",loginData)
    return res.data
}

export const logout = async()=>{
    
    const res = await axiosInsance.post("/auth/logout")
    return res.data
}

export const getAuthUser = async ()=>{
    try {
        const res = await axiosInsance.get("/auth/me")
        return res.data
    } catch (error) {
        return null;
    }
}

export const completeOnBoarding = async (userData)=>{
    const res = await axiosInsance.post("/auth/onBoard",userData)

    return res.data
}

export const getRecommendedUsers = async ()=>{
    const res = await axiosInsance.get("/user")

    return res.data
}

export const getUserFriends = async ()=>{
    const res = await axiosInsance.get("/user/friends")

    return res.data
}

export const getOutgoingFriends = async ()=>{
    const res = await axiosInsance.get("/user/outgoing-friend-request")

    return res.data
}

export const sendFriendRequest = async (userId)=>{
    const res = await axiosInsance.post(`/user/friend-request/${userId}`)

    return res.data
}

export const getFriendRequest = async ()=>{
    const res = await axiosInsance.get(`/user/friend-request`)

    return res.data
}

export const acceptFriendRequest = async (userId)=>{
    const res = await axiosInsance.put(`/user/friend-request/${userId}/accept`)

    return res.data
}

export const getStreamToken = async ()=>{
    const res = await axiosInsance.get(`/chat/token`)

    return res.data
}

