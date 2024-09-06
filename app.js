const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Set up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Use routes from the index.js file
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

app.use(express.static('public'));