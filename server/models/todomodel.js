import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    title: String
})

const Todos=mongoose.model("Todos",todoSchema);
export default Todos;
