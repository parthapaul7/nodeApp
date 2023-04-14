const mongoose = require('mongoose');

var productDetailsSchema = new mongoose.Schema({
    link_360_ : { type:String, required: true },
    types_ : { type:String, required: true },
    product_id: { type:String, required: true },
    category_:{ type:String, required: true },
    brand_name_:{ type:String, required: true } ,
    shop_name_:{ type:String, required: true } ,
    shop_id: { type: mongoose.Schema.Types.ObjectId, ref: "Shop",required: true },
    original_price_:{ type:String, required: true } ,
    number_of_liked: { type:String, required: true },
    multiple_photo_link: { type:String, required: true },
    selling_price: { type:String, required: true },
    total_order:{ type:String, required: true } ,
    color:{ type:String, required: true },
    related_product_id:{ type:String, required: true },
    related_colors: { type:String, required: true },
    total_left: { type:String, required: true },
    available_sizes:{ type:String, required: true } ,
    small_sizes:{ type:String, required: true },
    medium_sizes: { type:String, required: true },
    large_sizes: { type:String, required: true },
    xl_sizes:{ type:String, required: true } ,
    xl_2_sizes: { type:String, required: true },
    
}, {
    timestamps: true
});



var ProductDetails = mongoose.model('ProductDetail', productDetailsSchema);
module.exports = ProductDetails;