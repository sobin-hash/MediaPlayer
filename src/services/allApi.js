// import { Component } from "react";
import { BASE_URl } from "./base-url";
import { commonRequest } from "./commonRequest";
// function to upload videos

export const addVideos = async(body)=>{
    return await commonRequest("POST",`${BASE_URl}/videos`,body)
}


// to get all videos

export const getVideos=async()=>{
    return await commonRequest("GET",`${BASE_URl}/videos`,'')
}

//to delete a specific video

export const deleteVideo=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URl}/videos/${id}`,{})
}

//to add category

export const addCat = async(body)=>{
    return await commonRequest("POST",`${BASE_URl}/categories`,body)
}
// to display category
export const getCategory=async()=>{
    return await commonRequest("GET",`${BASE_URl}/categories`,'')
}

//to delete a specific cat

export const deleteCategory=async(id)=>{
    return await commonRequest("DELETE",`${BASE_URl}/categories/${id}`,{})
}

//to show watch history

export const getWatchHistory=async()=>{
    return await commonRequest("GET",`${BASE_URl}/watchhistory`,'')
}


//to add watch history

export const addHistory = async(body)=>{
    return await commonRequest("POST",`${BASE_URl}/watchhistory`,body)
}

// to get specific videos

export const getSpecificVideos=async(id)=>{
    return await commonRequest("GET",`${BASE_URl}/videos/${id}`,'')
}


//to update category

export const updateCategory = async(id,body)=>{
    return await commonRequest("PUT",`${BASE_URl}/categories/${id}`,body)
}