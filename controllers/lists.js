'user strict'

const ModelLists = require('../Models/lists');

var controller = {

    home:function(req, res){
        res.status(200).send({
            message: "hola mundo"
        });
    },
    savelist:function(req,res){
        var modelList = new ModelLists();
        var params = req.body;
        
        
        modelList.lists = params.lists;
        modelList.lists.name = params.name;
        modelList.lists.tasks = params.tasks;

        modelList.save((err,projectStored)=>{
            if(err) return res.status(500).send({
                message:"ERROR AL GUARDAR EL DOCUMENTO"
            });
            if(!projectStored) return res.status(404).send({message:"no se ha podido guardar"});
            return res.status(200).send({project:projectStored})
        });
    },
    saveUser:function(req,res){
        return res.status(200).send({message:"soy la SaveUser"});
    }
}

module.exports = controller;