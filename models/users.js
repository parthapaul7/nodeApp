const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name: { type:String, required: true },
    email: { type:String, required: true },
    phone_no: { type:String, required: true , unique: true},
    photo: { type:String, required: true },
    orders: [{type: mongoose.Schema.Types.ObjectId, ref: 'Order', unique: true}],
    address: { type:Object, required: true },
    cart: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProductDetail' , unique: true}],
    wishlist: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProductDetail', unique : true}], 
    suggestion: [{type: mongoose.Schema.Types.ObjectId, ref: 'ProductDetail' , unique: true}],
    shops : [{type: mongoose.Schema.Types.ObjectId, ref: 'Shop' , unique: true}],
    notifications: [{type:String , required: true}],
}, {
    timestamps: true
});



const Users= mongoose.model('User', userSchema);
module.exports = Users;