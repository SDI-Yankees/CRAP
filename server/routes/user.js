var express = require('express');
var router = express.Router();
var environment = process.env.NODE_ENV || 'development';
const knex = require('knex')(require('../knexfile.js')[environment]);

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await knex.from('users').select('*');
  res.status(200).json(users);
});

router.delete('/:userId', function(req, res, next){
  const userId = parseInt(req.params.userId);
  knex('users')
  .where({id: userId})
  .del()
  .then(res.status(200).send('User deleted'))
})

module.exports = router;