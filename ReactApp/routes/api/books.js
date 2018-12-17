const express = require('express');
const router = express.Router();

//Book Model
const Book = require('../../models/Book');

// @route GET api/books
// @desc Get all books
// @access Public
router.get('/', (req, res) => {
    Book.find().then(books => res.json(books));
});

// @route POST api/books
// @desc Create a Book
// @access Public
router.post('/', (req, res) => {
    const newBook = new Book({
        name: req.body.name,
        isbn: req.body.isbn,
        author: req.body.author,
        price: req.body.price,
        year: req.body.year,
        publisher: req.body.publisher
    });
    newBook.save().then(book => res.json(book));
});

// @route DELETE api/books/:id
// @desc Remove a Book
// @access Public
router.delete('/:id', (req, res) => {
    Book.findById(req.params.id).then(book => book.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;
