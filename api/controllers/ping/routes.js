const routes = require('express').Router()
const { ping } = require('./handler')
const { createConnectionProfile } = require('./connection-profile')

routes.get('/', ping)
routes.get('/connection-profile', createConnectionProfile)

module.exports = routes
