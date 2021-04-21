
exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments ('id').primary()
    table.string ('first_name')
    table.string ('last_name')
    table.string ('rank')
    table.boolean ('is_admin').defaultTo(false)
    table.boolean ('is_supervisor').defaultTo(false)
    table.integer ('supervisor_id')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};

