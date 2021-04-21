
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('training_completions').del()
    .then(function () {
      // Inserts seed entries
      return knex('training_completions').insert([
        {training_id: 1, user_id: 1, completion_date: '2020-02-27'},
        {training_id: 3, user_id: 1, completion_date: '2020-04-30'},
        {training_id: 4, user_id: 1, completion_date: '2020-02-20'},
      ]);
    });
};
