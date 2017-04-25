const db = require('../models');
const passwordHas = require('password-hash')
const methods = {};

methods.getAll = (req, res) => {
  db.User.findAll()
  .then(users => {
    res.send(users);
  })
  .catch(err => {
    res.send(err);
  })
}

methods.findId = (req, res) => {
  db.User.findById(req.params.id)
  .then(user => {
    res.send(user);
  })
  .catch(err => {
    res.send(err);
  })
}

methods.signUp = (req, res, next) => {
  db.User.create({username: username, password:password})
  .then(() => {
    res.send('success sign up a new user');
  })
  .catch(err => {
    res.send(err);
  })
}


module.exports = methods;