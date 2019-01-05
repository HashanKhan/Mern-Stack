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
router.delete('/:id', function(req, res, next) {
    Book.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

// @route GET api/books/:author
// @desc Get all books of the particular author.
// @access Public
router.get('/:author', (req, res) => {
    Book.find({author: req.params.author}).then(books => res.json(books));
});

module.exports = router;
