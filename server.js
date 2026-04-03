const dns = require("node:dns");

dns.setServers(['8.8.8.8', '1.1.1.1']);

const express = require('express');
require('dotenv').config();
const authorRoutes = require("./routes/authorRoute.js");

const connectDB = require("./config/database.js");

const bookRoutes = require("./routes/bookRoute.js");

const librarianRoutes = require("./routes/librarianRoute.js");

const studentRoutes = require("./routes/studentRoute.js");

const app = express();
app.use(express.json()); // Allows Express to parse JSON bodies from Postman

app.use("/authors", authorRoutes); // Use the author routes

app.use("/books", bookRoutes); // Use the book routes

app.use("/librarians", librarianRoutes); // Use the librarian routes

app.use("/students", studentRoutes); // Use the student routes

const PORT = process.env.PORT || 5000;


const startServer = async () => {

  await connectDB();
  
  app.listen(PORT, () => {
    console.log( (`Server running on http://localhost:${PORT}`) );
  });
};

startServer();

