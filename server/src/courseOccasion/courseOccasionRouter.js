const express = require("express");
const router = express.Router();
const courseOccasionController = require("./courseOccasionController");
const { authUser } = require("../../config/basicAuth");

//Skapa kurstillfälle
router.post("/api/courseoccasion", courseOccasionController.createCourseOccasion);
// router.delete("/api/course/:id", courseController.deleteCourse);
router.get("/api/courseoccasion", courseOccasionController.getCourseOccasions);

module.exports = router;
