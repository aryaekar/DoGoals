import mongoose from "mongoose";

const todoSchema=new mongoose.Schema({
    user:{
        type:mongoose.Types.ObjectId,
        ref:'User',
        required: true
    },
    title:{
        type: String,
        required: true
    },
    group:{
        type:mongoose.Types.ObjectId
    }
})

const Todos=mongoose.model("Todos",todoSchema);
export default Todos;
