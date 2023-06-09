const mongoose = require('mongoose');

const orderSchema= new mongoose.Schema({
    phone_no: { type:String, required: true },
    product_id: { type:mongoose.Schema.Types.ObjectId, ref:"ProductDetail",required: true },
    delivery_status:{ type:String, required: true } ,
    shop_id: { type: mongoose.Schema.Types.ObjectId, ref: "Shop",required: true },
    multiple_photo_link: [{ type:String, required: true }],
    price : { type:String, required: true },
    order_date: { type: String, required: true }, 
    delivery_date: { type: String, required: true },
}, {
    timestamps: true
});



const Orders= mongoose.model('Order', orderSchema);
module.exports = Orders;