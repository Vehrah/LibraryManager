const Student = require("../models/student");


//Create Student//
exports.createStudent = async (req, res) => {
  try {
    const newStudent = await Student.create(req.body);

    res.status(201).json({
      message: "Student created successfully",
      newStudent
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


// Get All Students//
exports.getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json({
      message: "Students retrieved successfully",
      students
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


//Get Single Student//
exports.getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({
      message: "Student retrieved successfully",
      student
    });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};