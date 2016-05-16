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

const indexUserLocations = (req, res, next) => {
  User.findById(req.query.user_id).then (function(user){
    let locations = user.locations;
    return locations;
  })
  .then(locations => res.json({ locations }))
  .catch(err => next(err));
};

const show = (req, res, next) => {
   Location.findById(req.body.user.id).then (function(user) {
     let locations = user.locations;
     return locations;
   })
    .then(location => location ? res.json( {location} ) : next())
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
  let change = req.body.location.change;
  let field = req.body.location.field;
  User.findById(req.body.user.id).then( function (user) {
    let match = false;
    user.locations.forEach( function (location) {
      if(location._id == req.body.location.id) {
        location[field] = change;
        match = true;
      }
    });
    if (match) {
      return user.save();
    } else {
      return next();
    }
  })
    .then(user => res.json({ user }))
    .catch(err => next(err));
};

// this code updates a location within mongo in terminal:
// db.users.update(
//   {"_id" : ObjectId("5738beeafbc48d7b5d9ef4bc"), "locations._id" : ObjectId("5738c97c307c011a5ecacf1e") },
//   {$set : {"locations.$.visited" : true} })

const destroy = (req, res, next) => {
  User.findByIdAndUpdate(req.body.user.id, {
      '$pull': {
          'locations':{ '_id': req.body.location.id }
      }
  })
    .then(() => res.sendStatus(200))
    .catch(err => next(err));
};

module.exports = controller({
  index,
  show,
  create,
  update,
  destroy,
  indexUserLocations,
}, { before: [
  { method: authenticate, except: ['index', 'show', 'indexUserLocations'] },
], });
