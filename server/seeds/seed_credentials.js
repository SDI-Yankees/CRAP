
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('credentials').del()
    .then(function () {
      // Inserts seed entries
      //username, password, email, user_id (foreign key)
      return knex('credentials').insert([
        {username: 'snuffy', password: 'password', email: 'archibald.snuffy@us.af.mil', user_id: 1},
        {username: 'supervisor', password: 'password', email: 'dave.chappelle@us.af.mil', user_id: 2},
        {username: 'trainingmanager', password: 'password', email: 'timothy.lang@us.af.mil', user_id: 3},
        {username: 'commander', password: 'password', email: 'eddie.uckerman@us.af.mil', user_id: 4},
      ]);
    });
};
