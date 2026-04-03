const express = require("express");
const router = express.Router();
const studentController = require("../controller/studentController");

router.post("/:id", studentController.createStudent);
router.get("/", studentController.getStudents);
router.get("/:id", studentController.getStudents);
// router.put("/:id", studentController.updateStudent);
// router.delete("/:id", studentController.deleteStudent);

module.exports = router;