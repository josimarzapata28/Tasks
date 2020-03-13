'use strict'

var mongoose = require('mongoose');
var app = require('./app')
var port = 3700;
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ToDo', {useNewUrlParser:true, useUnifiedTopology: true})
                .then(()=>{
                    console.log("conexion succes");

                    //create server
                    app.listen(port, () =>{
                        console.log("server running in the url: localhost:3700");
                    });
                    
                })
                .catch(err=>console.log(err));
