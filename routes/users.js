'use strict'

var express = require('express');
var userController = require('../controllers/Users');

var routesUser = express.Router();

routesUser.post('/saveUser', userController.saveUser);


module.exports = routesUser;


//pasame tu numero y te marco por wsp y asi si algo me xplicas mas rapido okdame tu cell 3233783524