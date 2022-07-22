const express = require('express');
const app = express();
const port = 3000;

//Gukanan EJS

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
    res.render('index', { title: 'Home Page'});
});

app.get('/about', (req, res) =>{
    res.render('about', { title: 'About Us'});
});

app.get('/contact', (req, res) =>{
    res.render('contact', { title: 'Contact' });
});

app.get('/produk', (req, res) =>{
    res.render('produk', { title: 'Product'});
});

app.get('/payment', (req, res) =>{
    res.render('payment', { title: 'Payment'});
});

app.get('/team', (req, res) =>{
    res.render('team', { title: 'Team'});
});

app.get('/dashboard', (req, res) =>{
    res.render('dashboard', { title: 'Dashboard'});
});

app.use('/', (req, res) => {
    res.status(404);
    res.send('<h1>404<h1>');
});

app.listen(port, () => {
    console.log(`Open at http://localhost:${port}`);
});
