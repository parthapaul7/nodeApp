const express = require("express");
const router = express.Router();
// const homeController = require("../controller/home");
const productController = require("../controller/product");
// const isAdmin = require("../middleware/isAdmin");
// const isDoctor = require("../middleware/isDoctor");
// const { check } = require("../middleware/jwtAuth");

// GET for front page
router.get("/product",  productController.getProduct);

router.post("/product",  productController.postProduct);

router.get("/product/:id",  productController.getProductWithId);

router.get("/search/:search",  productController.searchProduct);

router.get("/category/:category",  productController.searchCategory);

//route with no check 



module.exports = router;