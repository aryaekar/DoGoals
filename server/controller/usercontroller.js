import mongoose from "mongoose";
import User from "../models/usermodel.js";

//@desc: Validate user login  ,@method: POST /api/user/login
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email: email});
        if (!user) {
            return res.status(404).json({ "msg": "Incorrect email" });
        }
        if(user.password!==password){
            return res.status(400).json({ "msg": "Incorrect password" });
        }
        res.json(user);
    }
    catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).json({ error: "Server error" });
    }
}

//@desc: Validate user login  ,@method: POST /api/user/register
const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const result = await User.create({
        name,
        email,
        password,
    })
    res.json(result);
}

//@desc: Validate user login  ,@method: GET /api/user/me/:id
const meUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id))
        return res.status(400).json({ error: "Invalid ID format" });

    try {
        const result = await User.findOne({ _id: id });
        if (!result)
            return res.status(404).json({ "msg": "user id not found" });
        res.json(result);
    }
    catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).json({ error: "Server error" });
    }
}

const getallusers = async (req, res) => {
    const result = await User.find();
    res.json(result);
}

export { loginUser, registerUser, meUser, getallusers };