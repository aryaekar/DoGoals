import mongoose from "mongoose";
import User from "../models/usermodel.js";

//@desc: Validate user login  ,@method: POST /api/user/login
const loginUser = (req, res) => {
    res.json({ "msg": "uaer login" });
}

//@desc: Validate user login  ,@method: POST /api/user/register
const registerUser = async (req, res) => {
    const {name,username,password,email}=req.body;
    const result = await User.create({
        name,
        username,
        password,
        email
    })
    res.json(result);
}

//@desc: Validate user login  ,@method: GET /api/user/me/:id
const meUser = async (req, res) => {
    const { id } = req.params;
    if (!mongoose.isValidObjectId(id))
        return res.status(400).json({ error: "Invalid ID format" });

    try {
        const result = await User.findOne(id);
        if (!result)
            return res.status(404).json({ "msg": "user id not found" });
        res.json(result);
    }
    catch (error) {
        res.status(500).json({ error: "Server error" });
    }
}

export { loginUser, registerUser, meUser };