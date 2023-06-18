const routes = require('express').Router()
const { ping, createConnectionProfile, createDestinationConnectionProfile } = require('./handler')

routes.get('/', ping)
routes.get('/connection-profile', createConnectionProfile)
routes.get('/destination-connection-profile', createDestinationConnectionProfile)

module.exports = routes
