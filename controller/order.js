const Order = require('../models/orders');
const User = require('../models/users');

exports.getOrder = async(req, res, next) => {
    try {
        const orders = await Order.find();
        
        return res.status(200).json({
            status: "success",
            data: orders
        });

    } catch (error) {
        
        return res.status(500).json({
            status: "error",
            message: "some error occurred",
            error: error
        });
    }

}

exports.postOrder = async(req, res, next) => {
        const { user_id } = req.body;
    try {
        const orders = await Order.create(req.body);
        const order_id = orders._id;
        const userUpdate = await User.updateOne({_id : user_id},{
            $push: {orders : orders._id}
        })

        if( !userUpdate.acknowledged){
            return res.status(500).json({
                status: "error",
                message: "some error occurred",
            });
        }
        return res.status(200).json({
            status: "success",
            data: orders 
        });

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "some error occurred",
            error: error
        });        
    }

}

exports.updateOrder = async(req, res, next) => {
        const { user_id } = req.body;
        if(!user_id){
            return res.status(500).json({
                status: "error",
                message: "user id not provided",
            });
        } 
    try {
       const orders = await Order.updateOne({_id : req.params.id},req.body);

       return res.status(200).json({
            status: "success",
            data: orders 
        });

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "some error occurred",
            error: error
        });        
    }

}

exports.deleteOrder = async(req, res, next) => {
    try {
        const orders = await Order.deleteOne({_id : req.params.id});
        const userUpdate = await User.updateOne({_id : user_id},{
            $pull: {orders : req.params.id}
        })

        if( !userUpdate.acknowledged){
            return res.status(500).json({
                status: "error",
                message: "some error occurred",
            });
        }
        return res.status(200).json({
            status: "success",
            data: orders 
        });

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "some error occurred",
            error: error
        });        
    }

}



exports.getOrderWithId = async(req, res, next) => {

    try {
        const order = await Order.findById(req.params.id).populate('product_id').populate("shop_id");
        return res.status(200).json({
            status: "success",
            data: order
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "some error occurred",
            error: error
        });
    } 
}