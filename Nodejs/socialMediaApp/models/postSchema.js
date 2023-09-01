import mongoose from "mongoose";

const PostsSchema = new mongoose.Schema(
    {
        content: {
            type: String,
            required: true,
        },
        authorId: {
            type: String,
            required: true,
        },
        likeCount: {
            type: Number,
            default: 0
        }
    },
    { timestamps: true }
)

export default mongoose.model('Post', PostsSchema);