const express = require("express");
const router = express.Router();
// const homeController = require("../controller/home");
const shopController = require("../controller/shop");
// const isAdmin = require("../middleware/isAdmin");
// const isDoctor = require("../middleware/isDoctor");
// const { check } = require("../middleware/jwtAuth");

// GET for front page
// router.get("/admin", check, isAdmin, homeController.getAdmin);
router.get("/home",  shopController.getShop);

router.post("/home",  shopController.postShop);

router.get("/home/:id",  shopController.getShopWithId);

// router.get("/doctor", check, isDoctor, homeController.getDoctor);

//route with no check 
// router.get("/patient", homeController.getPatient);

// router.get("/search", check, homeController.getSearch);


module.exports = router;