const express= require("express")
const router=express.Router()
const usersController=require("./usersController")

router.get("/api/users", usersController.getUsers)
router.get("/api/users/:id", usersController.getUserById)
router.post("/api/users", usersController.createUser)
router.delete("/api/users/:id", usersController.deleteUser)




module.exports = router;