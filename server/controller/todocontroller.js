import Todos from "../models/todomodel.js";
import mongoose from "mongoose";
// import expressAsyncHandler from "express-async-handler"


//@desc :Get all todos from db  ,@url :GET /api/todos/userid
const getTodos=async(req,res)=>{
    const {userid}=req.params;
    if (!mongoose.isValidObjectId(userid))
        return res.status(400).json({ error: "Invalid ID format" });
    const result = await Todos.find({user:userid});
    if(!result){
        res.json({"error":"error"});
    }
    res.json(result);
}

//@desc :Post new todo to db  ,@url :POST /api/todos/userid
const postTodos=async(req,res)=>{
    const {userid}=req.params;
    if (!mongoose.isValidObjectId(userid))
        return res.status(400).json({ error: "Invalid ID format" });
    const result=await Todos.create({
        user:userid,
        title: req.body.title
    });
    res.json(result);
}

//@desc :Update todo with param.id from db  ,@url :PUT /api/todos/id
const updateTodos=async(req,res)=>{
    const { id } = req.params;
    const {title}=req.body;
    if (!mongoose.isValidObjectId(id))
        return res.status(400).json({ error: "Invalid ID format" });

    try{
        const result=await Todos.findByIdAndUpdate(
            {_id:id},
            {title}
        );
        if (!result)
            return res.status(404).json({ "msg": "user id not found" });
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
}

//@desc :Delete todo with param.id from db  ,@url :DELETE /api/todos/id
const deleteTodos=async(req,res)=>{
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id))
        return res.status(400).json({ error: "Invalid ID format" });

    try{
        const result=await Todos.findByIdAndDelete({_id:id});
        if (!result)
            return res.status(404).json({ "msg": "user id not found" });
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
}

export {getTodos,postTodos,updateTodos,deleteTodos};