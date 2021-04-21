
exports.up = function(knex) {
  return knex.schema.createTable ('training_completions', table => {
      table.integer ('training_id')
      table.foreign ('training_id').references('trainings.id').onDelete('CASCADE')
      table.integer ('user_id')
      table.foreign ('user_id').references('users.id').onDelete('CASCADE')
      table.date ('completion_date')
      table.primary(['training_id', 'user_id'])
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists ('training_completions')
};


// table.primary(['training_id', 'user_id]);