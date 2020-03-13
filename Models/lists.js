'use strict'

var mongoose = require('mongoose'); 
var Schema = mongoose.Schema;

var ListsSchema = Schema({

        name: String,
        tasks:[String]
          

});


module.exports = mongoose.model('Lists', ListsSchema);
