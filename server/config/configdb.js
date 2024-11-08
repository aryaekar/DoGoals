import mongoose from "mongoose";

async function dbconfig() {
    try{
        const connect=await mongoose.connect(process.env.MONGO_KEY);
        console.log(`connected successfully ${connect.connection.host}`)
    }
    catch(error){
        console.log(error);
    }
}
export default dbconfig;