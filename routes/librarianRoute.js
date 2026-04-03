const express = require("express");
const router = express.Router();
const librarianController = require("../controller/librarianController");

router.post("/", librarianController.createLibrarian);
router.get("/", librarianController.getLibrarians);
router.get("/:id", librarianController.getLibrarians);
// router.put("/:id", librarianController.updateLibrarians);
// router.delete("/:id", librarianController.deleteLibrarian);

module.exports = router;