'use strict';

const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  city: {
    type: String,
  },
  region: {
    type: String,
  },
  country: {
    type: String,
  },
  coords: {
    lat: {
      type: Number,
      require: true
    },
    long: {
      type: Number,
      require: true
    },
  },
  visited: {
    type: Boolean,
    require: true,
    default: false,
  },
  comment: {
    type: String,
  },
}, {
  timestamps: true,
});


const Location = mongoose.model('Location', locationSchema);

module.exports = Location;
