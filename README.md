#  School Library Management API

## Project Description

This is a RESTful API built using Node.js, Express, and MongoDB for managing a school library system.

It allows:

* Managing authors, books, students, and librarians
* Borrowing and returning books
* Tracking who borrowed a book and when it should be returned

---

##  Tech Stack

* Node.js
* Express.js
* MongoDB (Mongoose)

---

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Vehrah/LibraryManager
cd libraryManager
```

2. Install dependencies:

```bash
npm install
```


3. Run the server:

```bash
npm run dev
```

---

## API Endpoints

### Books

* POST /api/books → Create book
* GET /api/books → Get all books
* GET /api/books/:id → Get single book
* PUT /api/books/:id → Update book
* DELETE /api/books/:id → Delete book
* POST /api/books/:id/borrow → Borrow book
* POST /api/books/:id/return → Return book

---

### Authors

* POST /api/authors
* GET /api/authors
* GET /api/authors/:id
* PUT /api/authors/:id
* DELETE /api/authors/:id

---

### Students

* POST /api/students
* GET /api/students
* GET /api/students/:id

---

###  Librarians

* POST /api/librarians
* GET /api/librarians

---

## Notes

* Books can only be borrowed if status is "IN"
* When borrowed, book status changes to "OUT"
* When returned, status resets to "IN"

---

##  Author

 Chinecherem Vera Esme 
