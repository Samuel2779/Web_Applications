
const Bicicleta = require('../models/bicicletaBD')

exports.bicicleta_list = function(req, res){
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    Bicicleta.all().then((bicicleta) => {
      // Si el producto no existe entonces
      if (bicicleta == null) {
        // Regresa el error 404
        res.status(404).send('Not found');
        return;
      }
      // Si el producto existe entonces muestra la vista products/show.hbs
      // con la información del producto
      res.render('bicicletas/index', {bicis: bicicleta});
    });
   
}

exports.bicicleta_create_get = function(req, res){
    res.render('bicicletas/create')
}

exports.bicicleta_create_post = function(req, res){
    
    let bicicleta = {
        modelo: req.body.modelo,
        color: req.body.color,
        lat: req.body.lat,
        lon: req.body.lon

      };
      Bicicleta.create(bicicleta)
    .then((id) => {
      // Al finalizar la creación, reenvía al usuario a la página
      // inicial
      res.redirect('/bicicletas')
    });
    
} 

exports.bicicleta_delete_post = function(req, res){
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    Bicicleta.find(id).then((bicicleta) => {
      // Si el producto no existe entonces
      if (bicicleta == null) {
        // Regresa el error 404
        res.status(404).send('Not found');
        return;
      }
      // Elimina los datos del producto
      Bicicleta.delete(bicicleta.id)
        .then((id) => {
          // Al terminar redirige el índice
          res.redirect('/bicicletas')
        });
    });
    
}

exports.bicicleta_update_get = function(req, res){
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    Bicicleta.find(id).then((bici) => {
      // Si el producto no existe entonces
      if (bici == null) {
        // Regresa el error 404
        res.status(404).send('Not found');
        return;
      }
      // Si el producto existe entonces muestra la vista products/edit.hbs
      // con la información del producto
      res.render('bicicletas/update', {bici: bici});
    });
    
}

exports.bicicleta_update_post = function(req, res){
    let id = req.params.id;
    // Busca dentro de la base de datos el producto con el id indicado
    Bicicleta.find(id).then((bicicleta) => {
      // Si el producto no existe entonces
      if (bicicleta == null) {
        // Regresa el error 404
        res.status(404).send('Not found');
        return;
      }
  
      // Define los datos del producto actualizado
      let actualizarBici = {
        modelo: req.body.modelo,
        color: req.body.color,
        lat: req.body.lat,
        lon: req.body.lon
      }
  
      // Actualiza los datos del producto
      Bicicleta.update(bicicleta.id, actualizarBici)
        .then((id) => {
          // Al terminar redirige el índice
          res.redirect('/bicicletas')
        });
    });
    
   
}