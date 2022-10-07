const express = require("express");
const router = express.Router();
const authController = require("./authController");
const {authUser}=require("../../config/basicAuth")

router.post("/api/signin", authController.signInUser);
router.delete("/api/signin", authController.signOutUser);
router.get("/api/signin", authUser, authController.getSignedInUser);

 
module.exports = router;
