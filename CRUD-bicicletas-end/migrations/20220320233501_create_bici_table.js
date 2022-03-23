/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
      .createTable('bicicletas', (table) => {
        table.increments('id');
        table.string('modelo', 255).notNullable();
        table.string('color', 512).notNullable();
        table.float('lat', 14, 10);
        table.float('lon', 14, 10)
      });
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTable('bicicletas');
  };