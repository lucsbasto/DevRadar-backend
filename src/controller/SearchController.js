const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parsestringAsArray');

module.exports = {
  async index(req, res) {

    const {
      latitude,
      longitude,
      techs
    } = req.query;

    const techsArray = parseStringAsArray(techs);
    const devs = await Dev.find({
      techs: {
        $in: techsArray,
      },
      location: {
        $near: {
          $geometry: {
            type: 'Point',
            coordinates: [longitude, latitude]
          },
          //distancia em metros
          $maxDistance: 10000
        }
      }
    })
    return res.json({
      dev: devs
    });
  }
}