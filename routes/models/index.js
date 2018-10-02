/*
  This file is the connection for our models.
  The router will look here when it is told to go to models.
*/

const models = require('express').Router();
const all = require('./all');
const single = require('./single');
const cars = require('./cars');
const findObject = require('../../utils/findObject');

models.param('modelId', findObject('model'));

models.use('/:modelId/cars', cars);
models.get('/', all);
models.get('/:modelId', single);

module.exports = models;
