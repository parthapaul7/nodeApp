const mongoose = require('mongoose');

var ShopSchema = new mongoose.Schema({
    name: { type:String, required: true },
    email: { type:String, required: true },
    number_: { type:String, required: true },
    address_: { type:String, required: true },
    total_product: { type:String, required: true },
    total_product_sold: { type:String, required: true },
    joined_date: { type:String, required: true },
    logged_in: { type:String, required: true },
    all_product_ids: { type:String, required: true },
    orders_: { type:String, required: true },
    open_time: { type:String, required: true },
    close_time: { type:String, required: true },
    upi_id:{ type:String, required: true },
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProductDetail', unique: true}],
    rating: { type:String, required: true },
    image: { type:String, required: true },
}, {
    timestamps: true
});



var Shop= mongoose.model('Shop', ShopSchema);
module.exports = Shop;