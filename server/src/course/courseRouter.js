const express = require("express");
const router = express.Router();
const courseController = require("./courseController");
const { authUser } = require("../../config/basicAuth");

//Skapa kurstillfälle
router.post("/api/course", courseController.createCourse);
router.delete("/api/course/:id", courseController.deleteCourse);
router.get("/api/course", courseController.getCourses);

module.exports = router;
