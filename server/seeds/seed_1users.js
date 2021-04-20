
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'Archibald', last_name: 'Snuffy', rank: 'AMN', supervisor_id: 2},
        {first_name: 'Dave', last_name: 'Chappelle', rank: 'SSGT', is_supervisor: true, supervisor_id: 3},
        {first_name: 'Timothy', last_name: 'Lang', rank: 'TSGT', is_supervisor: true, is_admin: true, supervisor_id: 4},
        {first_name: 'Eddie', last_name: 'Uckerman', rank: 'COL', is_admin: true}
      ]);
    });
};
