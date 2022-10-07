const express= require("express")
const router=express.Router()
const usersController=require("./usersController")
const { authAdmin } = require("../../config/adminAuth");

router.get("/api/users", usersController.getAllUsers)
router.get("/api/users/:id", usersController.getUserById)
router.post("/api/users", usersController.createUser)
router.delete("/api/users/:id", usersController.deleteUser)




module.exports = router;