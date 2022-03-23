/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bicicletas').del()
    .then(function () {
      // Inserts seed entries
      return knex('bicicletas').insert([
        { modelo: 'bmx', color: 'rojo', lat: 19.284770943610578, lon: -99.13729060406136 },
        { modelo: 'Bennoto', color: 'azul', lat: 19.286055116801744, lon:  -99.1369912899661 },
        
      ]);
    });
};