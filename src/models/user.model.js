import mongoose from "mongoose";

//What it is going to save
const userSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
})

//To interect with the methods of DB
export default mongoose.model('User', userSchema)