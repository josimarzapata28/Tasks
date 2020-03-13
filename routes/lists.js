'use strict'

var express= require('express');
var ListsController = require('../controllers/lists');

var routes = express.Router();

routes.get('/home', ListsController.home);
routes.post('/savelist',ListsController.savelist);



module.exports = routes;