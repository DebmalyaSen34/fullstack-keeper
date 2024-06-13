import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import blogModel from './model/blogs'

const app = express();

const port = 5070;
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/blogs');



app.get('/api', (req, res) => {
    console.log('ag');
    res.json({"users": ['user1', 'user2', 'user3']});
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