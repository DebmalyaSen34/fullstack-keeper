import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

const app = express();

const port = 5070;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/blogs');

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    tag: String,
    author: String,
    summary: String
});

const blogModel = mongoose.model("users", blogSchema);

app.get('/Yours', (req, res) => {
    blogModel.find({})
    .then(blogs => res.json(blogs))
    .catch(err => res.json(err))
});

app.post('/submitBlog', async(req, res) => {
    console.log(req.body)
    blogModel.create(req.body)
    .then(blogs => res.json(blogs))
    .catch(err => res.json(err))
})

app.listen(port, () => {
    console.log(`Server stated on port ${port}`);
});