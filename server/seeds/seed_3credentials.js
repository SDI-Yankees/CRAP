const bcrypt = require('bcrypt');

async function genHash(password)  {
  const passwordHash =  await bcrypt.hash(password, 10)
  return passwordHash
} 

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('credentials').del()
    .then(async function () {
      // Inserts seed entries
      //username, password, email, user_id (foreign key)
      return knex('credentials').insert([
        {username: 'snuffy', password: await genHash('password'), email: 'archibald.snuffy@us.af.mil', user_id: 1},
        {username: 'supervisor', password: await genHash('password'), email: 'dave.chappelle@us.af.mil', user_id: 2},
        {username: 'trainingmanager', password: await genHash('password'), email: 'timothy.lang@us.af.mil', user_id: 3},
        {username: 'commander', password: await genHash('password'), email: 'eddie.uckerman@us.af.mil', user_id: 4},
      ]);
    });
};

