import mongoose from 'mongoose';

const registerSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true,
    },
    password:{
       type: Number,
       required: true,
    }
})

const user = mongoose.model("user", registerSchema);

export default user;