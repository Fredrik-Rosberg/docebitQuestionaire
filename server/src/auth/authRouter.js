const express = require("express");
const router = express.Router();
const authController = require("./authController");

router.post("/api/signin", authController.signInUser);
router.delete("/api/signin", authController.signOutUser);
router.get("/api/signin", authController.getSignedInUser);


module.exports = router;
