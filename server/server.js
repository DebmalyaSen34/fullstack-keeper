import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import blogModel from './model/blogs.js';
import restaurantModel from './model/restaurants.js';
import orderModel from './model/order.js';
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

app.get('/getRestaurants', async (req, res) => {
    try{
        const restaurants = await restaurantModel.find({});
        res.json(restaurants);
    }catch(err){
        res.status(500).json(err);
    }
});

app.get('/restaurants/:id', async (req, res) => {
    try{
        const restaurant = await restaurantModel.findById(req.params.id);
        res.json(restaurant);
    }catch(err){
        res.status(500).json(err);
    }
});

app.post('/checkout/:id', async (req, res) => {
    console.log(req.params.id);
    console.log(req.body.cart);
    try{
        const restaurant = await restaurantModel.findById(req.params.id);
        console.log(restaurant.name);
        const newOrder = new orderModel({
            restaurant: restaurant.name,
            order: req.body.cart
        });
        console.log(newOrder);
        const savedOrder = await newOrder.save();
        // console.log(savedOrder);
        res.status(200).json({message: 'checkout successful'});
    }catch(err){
        console.log(err);
    }
    // console.log(restaurant.name);
    // try{
    //     const newOrder = new orderModel({
    //         restaurant: restaurant,
    //         order: req.body.cart
    //     });
    //     console.log(newOrder);
    //     const savedOrder = await newOrder.save();
    //     // console.log(savedOrder);
    //     res.status(200).json({message: 'checkout successful'});
    // }catch(err){
    //     res.status(500).json({message: 'could not process your checkout'});
    // }
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