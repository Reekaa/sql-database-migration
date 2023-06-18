const shell = require('shelljs')

const ping = async (req, res) => {
    res.apiResponse('pong')
}

const createConnectionProfile = async (req, res) => {
    try {
        shell.exec('./connection_profile.json')
        res.apiResponse('success')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { ping, createConnectionProfile }
