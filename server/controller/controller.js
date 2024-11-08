// import express from 'express';
import { MongoClient } from "mongodb";
// import expressAsyncHandler from "express-async-handler"

async function dbconfig(){
    try{
        const client=await MongoClient.connect(process.env.MONGO_KEY);
        console.log("connected successfully");
        return client;
    }
    catch(error){
        console.log("erreo");
        console.log(error);
    }
}

// const client=await dbconfig();
//@desc :Get all todos from db  ,@url :GET /api/todos/
const getTodos=async(req,res)=>{
    const client=await dbconfig();
    const db=client.db("project0db");
    const collection = db.collection("todos");
    const result = await collection.find().toArray();
    res.json(result);
}

//@desc :Post new todo to db  ,@url :POST /api/todos/
const postTodos=async(req,res)=>{
    const client=await dbconfig();
    const db=client.db("project0db");
    const collection = db.collection("todos");
    const result=await collection.insertOne(req.body);
    // console.log(req.body);
    res.json(result);
}

//@desc :Update todo with param.id from db  ,@url :PUT /api/todos/id
const updateTodos=(req,res)=>{
    res.json({"msg":`Update request from server for ${req.params.id}`});
}

//@desc :Delete todo with param.id from db  ,@url :DELETE /api/todos/id
const deleteTodos=(req,res)=>{
    res.json({"msg":`Delete request from server for ${req.params.id}`});
}

export {getTodos,postTodos,updateTodos,deleteTodos};