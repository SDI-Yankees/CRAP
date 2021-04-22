var express = require('express');
var router = express.Router();
var environment = process.env.NODE_ENV || 'development';
const knex = require('knex')(require('../knexfile.js')[environment]);
const bcrypt = require('bcrypt');

router.post('/', async (req, res) => {
  const user = await knex('credentials')
  .select('password', 'user_id')
  .where({username: req.body.username})
  // console.log(JSON.stringify(req.body))
  await bcrypt.compare(req.body.password, user[0].password, async (err, result) => {
    if (err){
      res.status(404).json('Something went wrong')
    } else {
        if (result) {
          const loggedInUser = await knex.from('users')
          .select('*')
          .where({id:user[0].user_id})
          res.status(200).json(loggedInUser)
        } else {
          res.status(404).json('Invalid credentials')
        }
    }
  })
  ;
})


router.post('/register', async (req, res) => {
  const user = req.body;
  try{
    // console.log('attempting to add');
    const alreadyExists = await knex('users')
    .select('*')
    .where({first_name: user.first_name, last_name: user.last_name, rank: user.rank});
    // console.log(alreadyExists)
    if (alreadyExists.length !== 0){
      // console.log('user already exists')
      res.status(404).json('User already exists');
    } else {
      const userAdded = await knex('users')
      .insert({first_name: user.first_name, last_name: user.last_name, rank: user.rank, is_supervisor: user.is_supervisor, supervisor_id: user.supervisor_id});
      if (userAdded){
        // console.log('looking up ID')
        const userId = await knex('users')
        .select('id')
        .where({first_name: user.first_name, last_name: user.last_name, rank: user.rank});
        // console.log(`user will be added with ID: ${JSON.stringify(userId)}`)
        // console.log('updating creds table')
        const passwordHash = await bcrypt.hash(user.password, 10)
        const credsUpdate = await knex('credentials')
        .insert({username: user.username, password: passwordHash, email: user.email,  user_id: userId[0].id})
        if (credsUpdate){
          res.status(201).json('User successfully added')
        }
      } else {
        res.status(404).json('User cannot be added')
      }
    }
  }
  catch {
    error => res.status(404).json('Something went wrong.')
  }
  })


module.exports = router;