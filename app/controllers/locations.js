'use strict';

const controller = require('lib/wiring/controller');
const models = require('app/models');
const Location = models.location;

const authenticate = require('./concerns/authenticate');

const index = (req, res, next) => {
  Location.find()
    .then(locations => res.json({ locations }))
    .catch(err => next(err));
};

const show = (req, res, next) => {
  Location.findById(req.params.id)
    .then(location => location ? res.json({ location }) : next())
    .catch(err => next(err));
};

const create = (req, res, next) => {
  let location = Object.assign(req.body.location);
  Location.create(location)
    .then(location => res.json({ location }))
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
  { method: authenticate, except: ['index', 'show'] },
], });
