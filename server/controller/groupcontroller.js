import mongoose from "mongoose";
import Group from "../models/groupmodel.js";

const getGroups=async(req,res)=>{
    const {userid}=req.params;
    if(!mongoose.isValidObjectId(userid)){
        return res.status(400).json({ error: "Invalid ID format" });
    }
    try{
        const groups=await Group.find({user: userid});
        if(!groups){
            return res.status(404).json({msg: "User not found"});
        }
        res.json(groups);
    }
    catch(error){
        console.error("Error fetching groups:", error);
        res.status(500).json({ error: "Server error" });
    }
}

const postGroup=async (req,res)=>{
    const {userid}=req.params;
    const {groupname}=req.body
    if(!mongoose.isValidObjectId(userid)){
        return res.status(400).json({error: "Invalid ID format"});
    }
    try{
        const result=await Group.create({
            groupname: groupname,
            user: userid
        });
        res.json(result);
    }
    catch(error){
        console.error("Error fetching groups:", error);
        res.status(500).json({ error: "Server error" });
    }
}

const deleteGroup=async (req,res)=>{
    const {id}=req.params;
    if(!mongoose.isValidObjectId(id)){
        return res.status(400).json({error: "Invalid ID format"});
    }
    try{
        const result=await Group.findByIdAndDelete({_id:id});
        if(!result){
            return res.status(404).json({msg: "Group not found"});
        }
        res.json(result);
    }
    catch(error){
        console.error("Error fetching groups:", error);
        res.status(500).json({ error: "Server error" });
    }
}

export {getGroups,postGroup,deleteGroup};