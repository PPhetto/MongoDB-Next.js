import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    address: String
})

export default mongoose.models.Post || mongoose.model("Post", PostSchema)