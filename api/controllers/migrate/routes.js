const routes = require('express').Router()
const { ping, createConnectionProfile, createDestinationConnectionProfile, createMigrationJob, startMigrationJob } = require('./handler')

routes.get('/ping', ping)
routes.get('/connection-profile', createConnectionProfile)
routes.get('/destination-connection-profile', createDestinationConnectionProfile)
routes.get('/create-migration-job', createMigrationJob)
routes.get('/start-migration-job', startMigrationJob)

module.exports = routes
