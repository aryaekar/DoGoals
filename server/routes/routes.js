import express from 'express';
import { getTodos,postTodos,updateTodos,deleteTodos } from '../controller/controller.js';
import { loginUser,registerUser,meUser } from '../controller/usercontroller.js';

const router=express.Router();

router.get("/todos/",getTodos);
router.post("/todos/",postTodos);
router.put("/todos/:id",updateTodos);
router.delete("/todos/:id",deleteTodos);

router.post("/user/login",loginUser);
router.post("/user/register",registerUser);
router.get("/user/me/:id",meUser);

router.all("/*",(req,res)=>{
    res.json({"msg":"Address not found"}).status(404);
})

export default router;