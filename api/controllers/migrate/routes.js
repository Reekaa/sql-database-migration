const routes = require('express').Router()
const { ping, createConnectionProfile, createDestinationConnectionProfile, createMigrationJob, startMigrationJob } = require('./handler')

routes.get('/ping', ping)
routes.post('/connection-profile', createConnectionProfile)
routes.post('/destination-connection-profile', createDestinationConnectionProfile)
routes.post('/create-migration-job', createMigrationJob)
routes.get('/start-migration-job', startMigrationJob)

module.exports = routes
