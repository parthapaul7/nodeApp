const express = require("express");
const router = express.Router();

const orderController= require("../controller/order");

// GET for front page
router.get("/order",  orderController.getOrder);

router.post("/order",  orderController.postOrder);

router.get("/order/:id",  orderController.getOrderWithId);


//route with no check 



module.exports = router;