const ShopDetails = require('../models/shopDetails');

exports.getShop = async(req, res, next) => {
    const shops = await ShopDetails.find();

    return res.status(200).json({
        status: "success",
        data: shops
    });
}

exports.postShop = async(req, res, next) => {
    try {
        const shop = await ShopDetails.create(req.body);
        return res.status(200).json({
            status: "success",
            data: shop
        });

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "some error occurred",
            error: error
        });        
    }

}

exports.getShopWithId = async(req, res, next) => {
    try {
        const shop = await ShopDetails.findById(req.params.id);

        if (!shop) {
            return res.status(404).json({
                status: "error",
                message: "No shop found"
            });
        }

        return res.status(200).json({
            status: "success",
            data: shop
        });

    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "some error occurred",
            error: error
        });
    }
}