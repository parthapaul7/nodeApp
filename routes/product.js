const express = require("express");
const router = express.Router();
// const homeController = require("../controller/home");
const productController = require("../controller/product");
// const isAdmin = require("../middleware/isAdmin");
// const isDoctor = require("../middleware/isDoctor");
// const { check } = require("../middleware/jwtAuth");

// GET for front page
// router.get("/admin", check, isAdmin, homeController.getAdmin);
router.get("/product",  productController.getProduct);

router.post("/product",  productController.postProduct);

router.get("/product/:id",  productController.getProductWithId);

router.get("/search/:search",  productController.searchProduct);

router.get("/category/:category",  productController.searchCategory);

// router.get("/doctor", check, isDoctor, homeController.getDoctor);

//route with no check 
// router.get("/patient", homeController.getPatient);

// router.get("/search", check, homeController.getSearch);


module.exports = router;