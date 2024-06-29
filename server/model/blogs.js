import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    tag: String,
    author: String,
    summary: String,
    time: {type: Date, default: Date.now()},
});

const blogModel = mongoose.model("users", blogSchema);

export default blogModel;