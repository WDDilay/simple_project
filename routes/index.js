const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'Top 5 Tourist Spots in the Philippines' });
});

router.get('/about', (req, res) => {
    res.render('about', { title: 'About This Blog' });
});

module.exports = router;