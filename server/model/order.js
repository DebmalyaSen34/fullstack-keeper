import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    restaurant: String,
    order: [{
        name: {type: String, required: true},
        quantity: {type: Number, required: true}
    }],
});

const orderModel = mongoose.model("orders", orderSchema);

export default orderModel;