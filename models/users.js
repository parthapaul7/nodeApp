const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name: { type:String, required: true },
    email: { type:String, required: true },
    phone_no: { type:String, required: true },
    photo: { type:String, required: true },
    orders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order'}],
    address: { type:Object, required: true },
    cart: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProductDetail'}],
    wishlist: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProductDetail'}], 
    suggestion: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProductDetail'}],
    shops : [{type: mongoose.Schema.Types.ObjectId, ref: 'Shop'}],
}, {
    timestamps: true
});



const Users= mongoose.model('User', userSchema);
module.exports = Users;