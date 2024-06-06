import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },

    userName: {
        type: String,
        required: true,
    },

    passWord: {
        type: String,
        required: true,
        min: 6,
    },

    profileImg: {
        type: String,
        default: "",
    }
}, { timestamps: true });


const userModel = mongoose.model("User", userSchema);

export default userModel;