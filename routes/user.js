const express = require("express");
const router = express.Router();

const userController = require("../controller/user");

// GET for front page
router.get("/user",  userController.getUser);

router.post("/user",  userController.postUser);

router.get("/user/:id",  userController.getUserWithId);

// router.get("/doctor", check, isDoctor, homeController.getDoctor);

//route with no check 
// router.get("/patient", homeController.getPatient);

// router.get("/search", check, homeController.getSearch);


module.exports = router;