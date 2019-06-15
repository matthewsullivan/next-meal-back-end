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
    const location = await getPlace(ctx.query.location);
    const places = [];
    
    const coordinates = `${location.geometry.location.lat},${location.geometry.location.lng}`;
    const nearby = await getPlaces(coordinates, ctx.query.radius, ctx.query.tags);

    for (const item of nearby) {
      const place = await getPlace(item.place_id);

      places.push(place);
    }
      
    ctx.body = places;
  },
};
