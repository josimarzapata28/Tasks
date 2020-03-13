'use strict'

const express = require('express');
const bodyparser = require('body-parser');

var app = express();

//files routes
var list_routes = require('./routes/lists');
var user_routes = require('./routes/users');

//middlewares
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//files
app.use('/api',list_routes);
app.use('/api',user_routes);

//export
module.exports = app;
