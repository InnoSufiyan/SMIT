import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        // img: {
        //     type: String,
        // },
        // followrs: {
        //     type: Number,
        //     default: 0,
        // },
        // followUsers: {
        //     type: [String],
        // },
        // fromGoogle: {
        //     type: Boolean,
        //     default: false,
        // },
    },
    { timestamps: true }
)

export default mongoose.model('User', UsersSchema);