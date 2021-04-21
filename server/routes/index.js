var express = require('express');
//const { development } = require('../knexfile.js');
var router = express.Router();
var environment = process.env.NODE_ENV || 'development';
const knex = require('knex')(require('../knexfile.js')[environment]);

// module.exports = require('knex')(config);
/* GET home page. */
router.get('/', (req, res) => {
  data = {
      greeting: "Welcome to the CRAP!"
  };
  res.status(200).json(data);
});
router.get('/:userId', (req, res)=>{
  const userId = req.params.userId;
  knex.select('*')
  .from('training_completions')
  .where({user_id: userId})
  .then(data => res.status(200).json(data))
})
router.post('/training', (req, res) => {
  const newTraining = req.body;
  if(knex('training_completions').)
  knex('training_completions')
    .insert({training_id: newTraining.training_id, 
             user_id: newTraining.user_id, 
             completion_date: newTraining.completion_date})
    .then(data => res.status(201).json(newTraining))
})

// router.post('/', async (req, res) => {
//   const postData = req.body;

//   try {
//     const ids = await db('posts').insert(postData);
//     res.status(201).json(ids);
//   } catch (err) {
//     res.status(500).json({message: "Error creating new post", error: err})
//   }

// });

module.exports = router;
