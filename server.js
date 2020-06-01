const express = require('express');

const serveStatic = require('serve-static');

const path = require('path');

const categoriesData = require('./data/categories.js');

const citiesData = require('./data/cities.js');

const itemData = require('./data/item.js');


//create the express app =======================================

const app = express();

//create middleware to handle the serving of the app

app.use('/', serveStatic(path.join(__dirname, '/public')));


//cities information route =====================================
//shows all cities available
app.get('/api/cities', function(req, res){
    res.json(citiesData);
});

//shows all categories for a city
app.get('/api/:city', function(req, res){
    res.json(categoriesData);
});
//shows all the items for that category
app.get('/api/:city/:categories', function(req, res){
    res.json(categoriesData);
});

//show all the items for that listing
app.get('/api/:city/:categories/:listing', function(req, res){
    res.json(itemData);
});

//show the item that was selected
app.get('/api/:city/:categories/:listing/:item', function(req, res){
    res.json(itemData);
});

app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

//create default port to serve the app =========================

const port = process.env.PORT || 5000;
app.listen(port);

console.log('server started on port' + port);