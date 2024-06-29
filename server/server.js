import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import blogModel from './model/blogs.js';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

mongoose.connect(process.env.DB_URL);

app.get('/yourBlogs', (req, res) => {
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