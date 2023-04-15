const ProductDetails = require('../models/productDetails');

exports.getProduct = async(req, res, next) => {
    try {
        const products = await ProductDetails.find();
        return res.status(200).json({
            status: "success",
            data: products
        });
        
    } catch (error) {
       return res.status(500).json({
              status: "error",
              message: "some error occurred",
              error: error
    });

    }

}

exports.postProduct = async(req, res, next) => {

    let { category_ } = req.body;
    category_ = category_.toLowerCase();

    try {
        const product = await ProductDetails.create({...req.body,category_ });
        return res.status(200).json({
            status: "success",
            data: product
        });
        
    } catch (error) {
         return res.status(500).json({
            status: "error",
            message: "some error occurred",
            error: error
        });
        
    }
}

exports.getProductWithId = async(req, res, next) => {
    try {
        const product = await ProductDetails.findById(req.params.id).populate('shop_id');
        return res.status(200).json({
            status: "success",
            data: product
        });
    } catch (error) {
       const err = new Error("No product found");
         err.statusCode = 500;
            next(err);
        return res.status(500).json({
            status: "error",
            message: "No product found",
            error: error
        });
    } 
}

exports.searchProduct = async(req, res, next) => {
    /// create index of text in mongodb
    await ProductDetails.createIndexes({ types_: "text", category_: "text", brand_name_: "text", shop_name_: "text", color: "text" });

    try {
        const products = await ProductDetails.find({
            $text: { $search: `\"${req.params.search}\"` },
          })

    return res.status(200).json({
        status: "success",
        data: products
    });
    
  } catch (error) {
    console.log(error);
     return res.status(500).json({
        status: "error",
        message: "some error occurred",
        error: error
    });
  }

}
    
exports.searchCategory = async(req, res, next) => {
    try {
        const products = await ProductDetails.find({ category_: req.params.category.toLowerCase() });
        return res.status(200).json({
            status: "success",
            data: products
        });
    } catch (error) {
        return res.status(500).json({
            status: "error",
            message: "some error occurred",
            error: error
        });
    }
}

