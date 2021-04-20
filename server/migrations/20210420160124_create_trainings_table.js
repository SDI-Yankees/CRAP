
exports.up = function(knex) {
  return knex.schema.createTable ('trainings', table => {
    table.increments ('id').primary()
    table.string ('name')
    table.string ('category')
    table.integer ('days_valid')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('trainings')
};
