const { Router } = require('express');
const router = Router();

//Obteniendo la base de datos de ejemplo
const db = require('../database.json')


router.get('/', function(req, res){
  
    //Si existe una query param
    if(req.query.name){
      const data = db.find(element => element.name === req.query.name);
      data ? res.json(data) : res.status(404).json({"code": 404});
    }else{//en caso de que no exita se envia todo, ya que no hay que filtrar nada
      res.json(db);
    }
});


router.get('/:id', (req, res) => {
    //Buscando si existe una ciudad con ese id
    const data = db.find(element => element.id == req.params.id );

    //Si exite retorna el json, caso contrario envia un mensaje
    data ? res.json(data) : res.status(404).json({"code": 404});
});

module.exports = router;