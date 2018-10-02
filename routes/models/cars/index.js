const cars = require('express').Router({ mergeParams: true });
const all = require('./all');
const data = require('../../../data.json');

cars.get('/', all);

module.exports = cars;
