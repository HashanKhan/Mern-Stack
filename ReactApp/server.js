const express = require('express'), bodyparser = require('body-parser'), mongoose = require('mongoose'), books = require('./routes/api/books'),
    authors = require('./routes/api/authors');

const app = express();

//BodyParser Middleware
app.use(bodyparser.json());

//URI MongoDB
const url = 'mongodb://localhost/Library';

//Connect to MongoDB
mongoose.connect(url, function (err, con) {
    if (err) {
        console.log ('ERROR connecting to: ' + url + '. ' + err);
    } else {
        console.log ('Succeeded connected to: ' + url);
    }
});

//Use routes
app.use('/api/books', books);
app.use('/api/authors', authors);

app.listen(3001, function () {
    console.log('App listening on port 3001!!!')
});