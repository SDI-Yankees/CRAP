
exports.up = function(knex) {
  return knex.schema.createTable ('credentials', table => {
      //username, password, email, user_id (foreign key)
    table.string ('username').primary()
    table.string ('password')
    table.string ('email')
    table.integer ('user_id')
    table.foreign ('user_id').references('users.id')//.onDelete('cascade')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('credentials')
};