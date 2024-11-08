import Todos from "../models/todomodel.js";
// import expressAsyncHandler from "express-async-handler"


//@desc :Get all todos from db  ,@url :GET /api/todos/
const getTodos=async(req,res)=>{
    const result = await Todos.find();
    res.json(result);
}

//@desc :Post new todo to db  ,@url :POST /api/todos/
const postTodos=async(req,res)=>{
    const result=await Todos.create({
        title: req.body.title
    });
    res.json(result);
}

//@desc :Update todo with param.id from db  ,@url :PUT /api/todos/id
const updateTodos=async(req,res)=>{
    const result=await Todos.updateOne(
        {title: req.params.id},
        {$set:
            {title: req.body.title}
        }
    );
    res.json(result);
}

//@desc :Delete todo with param.id from db  ,@url :DELETE /api/todos/id
const deleteTodos=async(req,res)=>{
    const result=await Todos.deleteOne({
        title: req.params.id
    });
    res.json(result);
}

export {getTodos,postTodos,updateTodos,deleteTodos};