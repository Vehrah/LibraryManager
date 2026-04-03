const Librarian = require("../models/librarian");


//Create Librarian//
exports.createLibrarian = async (req, res) => {
  try {
    const newLibrarian = await Librarian.create(req.body);

    res.status(201).json({
      message: "Librarian created successfully",
      newLibrarian
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


//Get All Librarians//
exports.getLibrarians = async (req, res) => {
  try {
    const librarians = await Librarian.find();

    res.status(200).json({
      message: "Librarians retrieved successfully",
      librarians
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};