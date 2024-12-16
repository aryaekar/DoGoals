import mongoose from "mongoose";

const GroupSchema=new mongoose.Schema({
    groupname:{
        type:String,
        required:true
    },
    user:{
        type:mongoose.Types.ObjectId,
        required:true
    }
})

const Group=mongoose.model("Group",GroupSchema);
export default Group;