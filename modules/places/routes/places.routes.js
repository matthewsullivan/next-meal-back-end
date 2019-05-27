const Acl = require('acl');
const router = require('koa-router')();
const path = require('path');

const acl = new Acl(new Acl.memoryBackend());

const placesController = require(path.resolve(
  './modules/places/controllers/places.controller.js'
));

acl.allow([
  {
    allows: [
      {
        permissions: '*',
        resources: '/api/v2/places',
      },
    ],
  },
]);

router
  .get('/api/v2/places', secured, placesController.getPlaces)
  
module.exports = router;
