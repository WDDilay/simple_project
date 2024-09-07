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

router.get('/viewbohol', (req, res) => {
    res.render('viewbohol', { title: 'About Bohol' });
});

router.get('/viewpalawan', (req, res) => {
    res.render('viewpalawan', { title: 'About Puerto Princesa Palawan' });
});

router.get('/viewcloud9', (req, res) => {
    res.render('viewcloud9', { title: 'About Cloud 9 surfing spot on Siargao' });
});

router.get('/viewcebu', (req, res) => {
    res.render('viewcebu', { title: 'About Diving SPot on Cebu Island' });
});

module.exports = router;