const Places = require("google-places-web").default; 

Places.apiKey = "AIzaSyDIzP6lts91F_1atFp9Kq0ygMDiGE8cI38";

/**
 * Get Place
 * @async
 * @param {string} location
 */
const getPlace = async (location) => {
    return Places.details({placeid: location});    
};

/**
 * Get Places
 * @async
 * @param {string} location
 * @param {number} radius
 * @param {array} tags
 */
const getPlaces = async (coordinates, radius, tags) => {
    return Places.nearbysearch({
        location: coordinates,
        keywords: tags,
        radius: radius * 1000,
        type: 'restaurant',
    });   
};

module.exports = {
  /**
   * Get Place
   * @async
   * @param {object} ctx
   */
  getPlace: async (ctx) => {    
    ctx.body = 'Hello, World!';
  },

  /**
   * Get Places
   * @async
   * @param {object} ctx
   */
  getPlaces: async (ctx) => {
    const location = ctx.query.location;
    const radius = ctx.query.radius;
    const tags = ctx.query.tags;

    const place = await getPlace(location);

    const coordinates = `${place.geometry.location.lat},${place.geometry.location.lng}`

    const places = await getPlaces(coordinates, radius, tags);
    
    ctx.body = places;
  },
};
