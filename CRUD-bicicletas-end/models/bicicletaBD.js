// models/Product.js
// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

// Crea un nuevo Producto (pero no lo almacena en la base)
exports.factory = (modelo, color, lat, lon) => {
  return {
    modelo: modelo,
    color: color,
    lat: lat,
    lon: lon
  }
}
// Obtiene todos los productos en la base
exports.all = () => {
  // Realiza la consulta dentro de knex
  return knex
    .select('*')
    .from('bicicletas');
}

exports.create = (bicicletas) => {
  return knex('bicicletas')
    .insert({
      modelo: bicicletas.modelo,
      color: bicicletas.color,
      lat: bicicletas.lat,
      lon: bicicletas.lon
    });
}
// Obtiene la información de un producto por su id
exports.find = (id) => {
  return knex
    .select('*')
    .from('bicicletas')
    .where('id', id)
    .first();
}

exports.update = (id, bicicletas) => {
  return knex('bicicletas')
    .update(bicicletas)
    .where('id', id);
}

exports.delete = (id) => {
  return knex('bicicletas')
    .delete()
    .where('id', id);
}