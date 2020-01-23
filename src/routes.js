const {
  Router
} = require('express');

const DevController = require('./controller/DevController')
const SearchController = require('./controller/SearchController')

const routes = Router();

routes.post('/devs', DevController.store);

routes.get('/devs', DevController.index);

routes.delete('/devs/:github_username', DevController.destroy);

routes.get('/search', SearchController.index);
module.exports = routes;