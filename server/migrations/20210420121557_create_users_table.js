
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('username', 100)
    table.string('password', 255)
  })
};

exports.down = function(knex) {
  
};
