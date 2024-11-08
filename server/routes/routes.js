import express from 'express';
import { getTodos,postTodos,updateTodos,deleteTodos } from '../controller/controller.js';

const router=express.Router();

router.get("/",getTodos);

router.post("/",postTodos);

router.put("/:id",updateTodos);

router.delete("/:id",deleteTodos);

export default router;