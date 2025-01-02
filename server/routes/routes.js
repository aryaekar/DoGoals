import express from 'express';
import { getTodos,postTodos,updateTodos,deleteTodos } from '../controller/todocontroller.js';
import { loginUser,registerUser,meUser,getallusers } from '../controller/usercontroller.js';
import { getGroups,postGroup,deleteGroup } from '../controller/groupcontroller.js';

const router=express.Router();

router.get("/todos/:userid",getTodos);
router.post("/todos/:userid",postTodos);
router.put("/todos/:id",updateTodos);
router.delete("/todos/:id",deleteTodos);

router.get("/groups/:userid",getGroups);
router.post("/groups/:userid",postGroup);
router.delete("/groups/:id",deleteGroup);

router.post("/user/login",loginUser);
router.post("/user/register",registerUser);
router.get("/user/me/:id",meUser);
router.get("/users",getallusers);

router.all("/*",(req,res)=>{
    res.json({"msg":"Address not found"}).status(404);
})

export default router;