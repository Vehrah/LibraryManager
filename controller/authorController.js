const Author = require("../models/author");


//Create Author//
exports.createAuthor = async (req, res) => {
  try {
    const newAuthor = await Author.create(req.body);

    res.status(201).json({
      message: "Author created successfully",
      newAuthor
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



//Get All Authors//
exports.getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();

    res.status(200).json({
      message: "Authors retrieved successfully",
      authors
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



//Get Single Author//
exports.getAuthor = async (req, res) => {
  try {
    const author = await Author.findById(req.params.id);

    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    res.status(200).json({
      message: "Author retrieved successfully",
      author
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



//Update Author//
exports.updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    res.status(200).json({
      message: "Author updated successfully",
      author
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



//Delete Author//
exports.deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);

    if (!author) {
      return res.status(404).json({ message: "Author not found" });
    }

    res.status(200).json({
      message: "Author deleted successfully"
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};