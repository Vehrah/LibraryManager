const book = require("../models/book");

// Borrow Book//
exports.borrowBook = async (req, res) => {
    try{
         const {studentId, librarianId, returnDate} = req.body;

          const book = await book.findById(req.params.id);

          if(!book){
             return res.status(404).json({message: "Book not found"});
          }
            if(book.status === "OUT"){
             return res.status(400).json({message: "Book is already borrowed"});
            }

            book.status = "OUT";
            book.borrowedBy = studentId;
            book.issuedBy = librarianId;
            book.returnDate = returnDate;

            await book.save();

            res.status(200).json({message: "Book borrowed successfully", book});


          
    }
    catch(err)
    {
        res.status(500).json({message: "err.message"});
    }

    }


    // Return Book//

exports.returnBook = async (req, res) => {
    try{
         const book = await book.findById(req.params.id);
            if(!book){
                return res.status(404).json({message: "Book not found"});
            }
            if(book.status === "IN"){
                return res.status(400).json({message: "Book is not borrowed"});
            }
            book.status = "IN";
            book.borrowedBy = null;
            book.issuedBy = null;
            book.returnDate = null;

            await book.save();

            res.status(200).json({message: "Book returned successfully", book});
    }
    catch(err)
    {
        res.status(500).json({message: "err.message"});
    }
}

//create book//

exports.createBook = async (req, res) => {
    try{
        const newBook = await book.create(req.body);
        res.status(201).json({message: "Book created successfully", newBook});
    }
    catch(err)
    {
        res.status(500).json({message: "err.message"});
    }
}


//get all books//

exports.getBooks = async (req, res) => {
    try{
        const books = await book.find() //.populate("authors");
        res.status(200).json({message: "Books retrieved successfully", books});
    }
    catch(err)
    {
        res.status(500).json({message: "err.message"});
    }
}

//get book by id//

exports.getBook = async (req, res) => {
    try{
        const book = await book.findById(req.params.id)
        .populate("authors")
        .populate("borrowedBy")
        .populate("issuedBy");
        if(!book){
            return res.status(404).json({message: "Book not found"});
        }
        res.status(200).json({message: "Book retrieved successfully", book});
    }
    catch(err)
    {
        res.status(500).json({message: "err.message"});
    }
}

//update book//

exports.updateBook = async (req, res) => {
    try{
        const book = await book.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!book){
            return res.status(404).json({message: "Book not found"});
        }
        res.status(200).json({message: "Book updated successfully", book});
    }

    catch(err)
    {
        res.status(500).json({message: "err.message"});
    }
}

//delete book//

exports.deleteBook = async (req, res) => {
    try{
        const book = await book.findByIdAndDelete(req.params.id);
        if(!book){
            return res.status(404).json({message: "Book not found"});
        }
        res.status(200).json({message: "Book deleted successfully", book});
    }

    catch(err)
    {
        res.status(500).json({message: "err.message"});
    }
}

