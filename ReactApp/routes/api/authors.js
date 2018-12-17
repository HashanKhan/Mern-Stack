const express = require('express');
const router = express.Router();

//Author Model
const Author = require('../../models/Author');

// @route GET api/authors
// @desc Get all authors
// @access Public
router.get('/', (req, res) => {
    Author.find().then(authors => res.json(authors));
});

// @route POST api/authors
// @desc Create a Author
// @access Public
router.post('/', (req, res) => {
    const newAuthor = new Author({
        fname: req.body.fname,
        lname: req.body.lname,
        nationality: req.body.nationality
    });
    newAuthor.save().then(author => res.json(author));
});

// @route DELETE api/authors/:id
// @desc Remove a Author
// @access Public
router.delete('/:id', (req, res) => {
    Author.findById(req.params.id).then(author => author.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;