const routes = require('express').Router()
const { ping, createConnectionProfile } = require('./handler')

routes.get('/', ping)
routes.get('/connection-profile', createConnectionProfile)

module.exports = routes
