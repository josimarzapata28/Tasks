'user strict'

const ModelUsers = require('../Models/users');



var ControllerUser = {
    saveUser:function(req,res){
    
        var user = new ModelUsers();
        var params = req.body;
        
        user.nameUser = params.NameUser; // acceso a la propiedad Name User del objeto MOdelUser 
        user.password = params.Password;// la misma verga en los siguientes
        user.lists.name = params.name;
        user.lists.tasks = params.tasks //.map( function(task) { return task;});// aqui recibes un array de string, supongo que hay que recorrerlos
//DEJA Y TE EXPLICO algo para no enredar el codigo te muestro algo y sigues    ahora si segue jaja    

       /* user.save((err,ertt)=>{
            if(err) return res.status(500).send({message:"ERROR AL GUARDAR DUCUMENTO"});
            return res.status(200).json(user);
        });*/

        console.log(user);
    }
    
    

    
}

module.exports = ControllerUser;