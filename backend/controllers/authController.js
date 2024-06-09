import User from '../models/userModel.js';
import bcrypt from 'bcryptjs';
import jsonGen from '../utils/jsonGenerating.js';

export const signupController = async (req, res) => {
    try {
        let { fullName, userName, passWord, confirmPassword, profileImg } = req.body;

        if (!fullName || !userName || !passWord || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required" });
        }


        if (userName.length < 3) return res.status(400).json({ message: "Username must be at least 3 characters" });

        const user = await User.findOne({ userName });

        if (user) {
            return res.status(400).json({ message: "Username already exists" });
        }

        if (passWord.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        if (passWord !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }

        if (!profileImg) {
            profileImg = `https://anonymous-animals.azurewebsites.net/avatar/${userName}`;
        }

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(passWord, salt);

        const newUser = new User({
            fullName,
            userName,
            passWord: hashedPassword,
            profileImg,
        });

        await newUser.save();

        jsonGen(res, newUser._id);

        res.status(201).json({
            fullName: newUser.fullName,
            userName: newUser.userName,
            profileImg: newUser.profileImg,
        });

    } catch (error) {
        console.error("Error in signupController", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export const loginController = async (req, res) => {
    try {
        const { userName, passWord } = req.body;

        if (!userName || !passWord) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ userName });

        const isMatch = await bcrypt.compare(passWord, user?.passWord || "");

        if (!user || !isMatch) {
            return res.status(400).json({ message: "Invalid username or password" });
        }

        jsonGen(res, user._id);

        return res.json({
            _id: user._id,
            fullName: user.fullName,
            userName: user.userName,
            profileImg: user.profileImg,
        });

    } catch (error) {
        console.error("Error in loginController", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


export const logoutController = async (req, res) => {
    try {
        res.cookie('token', '', {
            maxAge: 0
        });

        res.json({ message: "Logged out" });
    } catch (error) {
        console.error("Error in logoutController", error.message);
        res.status(500).json({ message: "Internal Server Error" });
    }
};