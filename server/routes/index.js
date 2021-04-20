var express = require('express');
var router = express.Router();
const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV]);
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Hi world');
});

router.get('/:userid', (req, res)=>{
  const userId = req.params.id;
  knex.select('*')
  .from('training_completions')
  .where({user_id: userId})
  .then(data => res.status(200).json(data))
})

module.exports = router;
