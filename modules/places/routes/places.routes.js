const path = require('path');

const Router = require('koa-router');
const router = new Router();

const placesController = require(path.resolve(
  './modules/places/controllers/places.controller.js'
));

router
  .get('/api/v2/places', placesController.getPlaces)
  
module.exports = router;
