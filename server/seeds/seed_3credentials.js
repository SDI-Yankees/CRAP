const bcrypt = require('bcrypt');



exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('credentials').del()
    .then(function () {
      // Inserts seed entries
      //username, password, email, user_id (foreign key)
      return knex('credentials').insert([
        {username: 'snuffy', password: bcrypt.hash('password', 10), email: 'archibald.snuffy@us.af.mil', user_id: 1},
        {username: 'supervisor', password: bcrypt.hash('password', 10), email: 'dave.chappelle@us.af.mil', user_id: 2},
        {username: 'trainingmanager', password: bcrypt.hash('password', 10), email: 'timothy.lang@us.af.mil', user_id: 3},
        {username: 'commander', password: bcrypt.hash('password', 10), email: 'eddie.uckerman@us.af.mil', user_id: 4},
      ]);
    });
};

