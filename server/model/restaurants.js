import mongoose from "mongoose";

const restuarantSchema = new mongoose.Schema({
    name: String,
    address: String,
    about: String,
});

const restaurantModel = mongoose.model("restaurants", restuarantSchema);

export default restaurantModel;