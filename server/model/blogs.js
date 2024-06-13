import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    tag: String,
    author: String,
    summary: String
});

const blogModel = mongoose.model("users", blogSchema);

export default blogModel;