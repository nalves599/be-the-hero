const express = require('express');

//Controllers
const OngsController = require('./controllers/OngsController');
const IncidentsController = require('./controllers/IncidentsController');
const ProfilesController = require('./controllers/ProfilesController');
const SessionsController = require('./controllers/SessionsController');

const routes = express.Router();

// Check Backend Status
routes.get('/check', (req,res) => (res.send()));

routes.post('/sessions', SessionsController.store);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.store);

routes.get('/incidents', IncidentsController.index);
routes.post('/incidents', IncidentsController.store);
routes.delete('/incidents/:id', IncidentsController.delete);

routes.get('/profile', ProfilesController.index);


module.exports = routes;