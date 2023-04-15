const Order = require('../models/orders');

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
    try {
        const orders = await Order.create(req.body);
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