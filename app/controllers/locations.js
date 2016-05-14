'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const User = models.user;
const Location = models.location;

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  User.findById(req.body.user.id).then (function(user){
    let locations = user.locations;
    return locations;
  })
  .then(locations => res.json({ locations }))
  .catch(err => next(err));
};


const show = (req, res, next) => {
   User.findById(req.body.user.id).then (function(user) {
     console.log(user);
     console.log(user.locations);
     return locations;
   })
    .then(locations => locations ? res.json( {locations} ) : next())
    .catch(err => next(err));
};

const create = (req, res, next) => {
  User.findById(req.body.user.id).then (function(user){
    let location = Object.assign(req.body.location);
    user.locations.push(location);
    return user.save();
  })
  .then(user => res.json({ user }))
  .catch(err => next(err));
};




const update = (req, res, next) => {
  let search = { _id: req.params.id};
  Location.findOne(search)
    .then(location => {
      if (!location) {
        return next();
      }

      return location.update(req.body.location)
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

const destroy = (req, res, next) => {
  let search = { _id: req.params.id};
  Location.findOne(search)
    .then(location => {
      if (!location) {
        return next();
      }

      return location.remove()
        .then(() => res.sendStatus(200));
    })
    .catch(err => next(err));
};

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
}, { before: [
  { method: authenticate, except: ['index', 'show', 'create'] },
], });
