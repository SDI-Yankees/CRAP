
exports.up = function(knex) {
  return knex.schema.createTable ('training_completions', table => {
      table.integer ('training_id')
      table.foreign ('training_id').references('trainings.id')//.onDelete('cascade')
      table.integer ('user_id')
      table.foreign ('user_id').references('users.id')//.onDelete('cascade')
      table.date ('completion_date')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists ('training_completions')
};
