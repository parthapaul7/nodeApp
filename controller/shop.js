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
        const reqBody = {
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
            number_: req.body.number_,
            address_: req.body.address_,
            total_product: req.body.total_product,
            total_product_sold: req.body.total_product_sold,
            joined_date: req.body.joined_date,
            logged_in: req.body.logged_in,
            all_product_ids: req.body.all_product_ids,
            orders_: req.body.orders_,
            open_time: req.body.open_time,
            close_time: req.body.close_time,
            upi_id: req.body.upi_id
        }

        const shop = await ShopDetails.create(reqBody);
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