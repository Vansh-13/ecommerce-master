import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const signup = async (req, res) => {
    const { fullname, email, password } = req.body;

    if (!fullname || !email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email already exists" });
        }

        const hashedPassword = await bcrypt.hash(password, await bcrypt.genSalt(10));
        const newUser = new User({ fullname, email, password: hashedPassword });
        await newUser.save();

        return res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.error('Error during signup:', error);
        return res.status(500).json({ message: error.message || "Internal Server Error" });
    }
};


export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: "Invalid email or password" });
        }

        return res.status(200).json({
            message: "User logged in successfully",
            user: {
                fullname: user.fullname,
                email: user.email,
                _id: user._id,
            },
        });
    } catch (error) {
        console.error("Login Error:", error.stack);
        return res.status(500).json({ message: error.message || "Internal Server Error" });
    }
};
