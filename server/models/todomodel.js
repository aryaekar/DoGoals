import mongoose, { Types } from "mongoose";

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
    },
    status:{
        type:String,
        enum:["Pending","In-Progress","Completed"],
        default:"Pending"
    }
})

const Todos=mongoose.model("Todos",todoSchema);
export default Todos;
