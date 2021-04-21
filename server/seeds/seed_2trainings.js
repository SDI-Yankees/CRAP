
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('trainings').del()
    .then(function () {
      // Inserts seed entries
      return knex('trainings').insert([
        {name: 'Cyber Awareness',category: 'TFAT',days_valid: 365},
        {name: 'Use of Force',category: 'TFAT',days_valid: 1095},
        {name: 'Suicide Awareness',category: 'Readiness',days_valid: 365},
        {name: 'Water Survival',category: 'OJT',days_valid: 730},
        {name: 'Galvanize.js',category: 'Other'},
      ]);
    });
};
