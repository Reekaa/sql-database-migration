const routes = require('express').Router()
const { ping, createConnectionProfile, createDestinationConnectionProfile, createMigrationJob } = require('./handler')

routes.get('/', ping)
routes.get('/connection-profile', createConnectionProfile)
routes.get('/destination-connection-profile', createDestinationConnectionProfile)
routes.get('/create-migration-job', createMigrationJob)

module.exports = routes
