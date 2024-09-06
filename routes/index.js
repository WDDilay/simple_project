const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Top 5 Tourist Spots in the Philippines' });
});

router.get('/about', (req, res) => {
    res.render('about', { title: 'About This Blog' });
});

router.get('/viewbora', (req, res) => {
    res.render('viewbora', { title: 'Boracay Island White Beach' });
});


module.exports = router;