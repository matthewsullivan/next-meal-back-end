const router = require('koa-router')();
const path = require('path');

const placesController = require(path.resolve(
  './modules/places/controllers/places.controller.js'
));


router
  .get('/api/v2/places', secured, placesController.getPlaces)
  
module.exports = router;
