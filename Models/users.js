'use sctrict'

const mongoose = require('mongoose');


const Schema = mongoose.Schema;

var ListSchema = new Schema({ // aqui que vas a definir un objeto?
    name:String,
    tasks:[String] //1
});
// esta muy lento esta vaina xdd
var UserSchema = new Schema({
    nameUser:String,
    password:String,
    lists: [ListSchema] //1, necesita

});


//dame el control un momento

module.exports = mongoose.model('Users', UserSchema);



