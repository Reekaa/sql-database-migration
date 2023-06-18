const shell = require('shelljs')

const ping = async (req, res) => {
    res.apiResponse('pong')
}

const createConnectionProfile = async (req, res) => {
    try {
        shell.exec('/home/db_migration_project_s2042203/sql-database-migration/api/controllers/ping/connection_profile.sh')
        res.apiResponse('success')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { ping, createConnectionProfile }
