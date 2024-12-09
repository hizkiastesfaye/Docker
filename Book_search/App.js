const express = require('express');
const Book = require('./AppModel');
// const connecDB = require('./dbConfig');
const path = require('path');

const app = express();

let booklist = [{ 
    title: 'Rich dad poor dad',
    author:'Robert T. Kiyosaki',
    publishedDate: '2024-12-09T09:59:25.972Z',
    category: 'Finance'}]
// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Set EJS as the template engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Add a new book
const addBook = async (req, res) => {
    // const newbook = new Book({
    //     title: req.body.title,
    //     author: req.body.author,
    //     publishedDate: req.body.publishedDate,
    //     category: req.body.category,
    // });
    // const responsee = await newbook.save();
    const newbook = {
        title: req.body.title,
        author: req.body.author,
        publishedDate: req.body.publishedDate,
        category: req.body.category,
    };
    booklist.push(newbook)
    res.status(201).json(booklist);
    console.log(booklist)
};

// Get all books
const getBook = async (req, res) => {
    // const books = await Book.find();
    if (!booklist || booklist.length === 0) {
        res.render('noBooks', { message: 'There are no books available.' });
    } else {
        res.render('bookList', { booklist});
    }
};

// Routes
app.get('/', (req, res) => {
    res.render('home', { title: 'Welcome to Book Search' });
});

app.post('/book/add', (req, res) => {
    addBook(req, res);
});

app.get('/book/get', (req, res) => {
    getBook(req, res);
});

// Catch-all for undefined routes
app.use((req, res) => {
    res.status(404).render('notFound', { message: 'Page not found' });
});

// Start server
app.listen(3005,'0.0.0.0', () => {
    // connecDB();
    console.log('Server running at http://localhost:3005...');
});

module.exports = app;
