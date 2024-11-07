import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password : {
        type: String,
        required: true,
    },
    bio : {
        type : String,
        default : "",
    },
    skills : {
        type : Array,
        default : [],
    },
    field : {
        type: String,
        default : "",
    },
    career : {
        type: String,
        default : "",
    },
    specification : {
        type: String,
        default : "",
    },
    isChoiced : {
        type: Boolean,
        default : false,
    },
    matchedWith : {
        type : Array,
        default : [],
    }
})


export const User = mongoose.model("User", userSchema);