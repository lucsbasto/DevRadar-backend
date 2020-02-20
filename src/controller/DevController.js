const axios = require('axios');
const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parsestringAsArray')
const { findConnections, sendMessage } = require("../websocket")
module.exports = {
  async store(req, res) {
    const {
      github_username,
      techs,
      latitude,
      longitude
    } = req.body;

     
    if (await Dev.findOne({github_username})) {
      return res.send({
        message: "Dev já cadastrado"
      })
    }
    const response = await axios.get(`https://api.github.com/users/${github_username}`);

    ////name = login significa que se o nome for undefined o valor padrão de name será o valor de login
    const {
      name = login, avatar_url, bio
    } = response.data;
    const location = {
      type: 'Point',
      coordinates: [longitude, latitude]
    }
    const techsArray = parseStringAsArray(techs)
    const dev = await Dev.create({
      name,
      github_username,
      avatar_url,
      bio,
      techs: techsArray,
      location
    });

    const sendSocketMessageTo = findConnections(
      { latitude, longitude },
      techsArray
  );

  sendMessage(sendSocketMessageTo, 'new-dev', dev);
    
    return res.send(dev);
  },

  async index(_req, res) {
    const devs = await Dev.find({});
    return res.send({
      devs: devs
    });
  },

  async destroy(req, res) {
    if (!req.params.github_username) {
      return res.send({
        message: "Usuário do github não informado."
      })
    }
    const dev = await Dev.findOne({
      github_username: req.params.github_username
    });
    if (!dev) {
      return res.send({
        error: "dev não cadastrado."
      });
    }
    await Dev.findOneAndDelete({
      github_username: req.params.github_username
    });
    return res.send({
      message: "dev removido com sucesso."
    });
  }

}