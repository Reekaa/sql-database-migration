const shell = require('shelljs')
const connectionProfile = require('./connection_profile.json')
const destinationConnectionProfile = require('./destination_connection_profile.json')
const migrationJob = require('./create_migration_job.json')

const ping = async (req, res) => {
    res.apiResponse('pong')
}

const createConnectionProfile = async (req, res) => {
    const { database } = req.body 
    try {
        Object.entries(connectionProfile).forEach(([key, value]) => {
            if(key === "database"){     
                connectionProfile[key] = database;
            }
        });
        shell.exec('chmod +x /home/db_migration_project_s2042203/sql-database-migration/api/controllers/migrate/connection_profile.sh')
        shell.exec('/home/db_migration_project_s2042203/sql-database-migration/api/controllers/migrate/connection_profile.sh')
        res.status(200).json({
            message: 'Connection Profile Created',
          });
    } catch (error) {
        console.log(error)
    }
}

const createDestinationConnectionProfile = async (req, res) => {
    // const { database } = req.body 
    try {
        // Object.entries(destinationConnectionProfile).forEach(([key, value]) => {
        //     if(key === "database"){     
        //         destinationConnectionProfile[key] = database;
        //     }
        // });
        shell.exec('chmod +x /home/db_migration_project_s2042203/sql-database-migration/api/controllers/migrate/destination_connection_profile.sh')
        shell.exec('/home/db_migration_project_s2042203/sql-database-migration/api/controllers/migrate/destination_connection_profile.sh')
        res.status(200).json({
            message: 'Destination Connection Profile Created',
          });
    } catch (error) {
        console.log(error)
    }
}

const createMigrationJob = async (req, res) => {
    const { type } = req.body 
    try {
        Object.entries(migrationJob).forEach(([key, value]) => {
            if(key === "type"){     
                migrationJob[key] = type;
            }
        });
        shell.exec('chmod +x /home/db_migration_project_s2042203/sql-database-migration/api/controllers/migrate/create_migration_job.sh')
        shell.exec('/home/db_migration_project_s2042203/sql-database-migration/api/controllers/migrate/create_migration_job.sh')
        res.status(200).json({
            message: 'Migration Job Created',
          });
    } catch (error) {
        console.log(error)
    }
}

const startMigrationJob = async (req, res) => {
    try {
        shell.exec('chmod +x /home/db_migration_project_s2042203/sql-database-migration/api/controllers/migrate/start_migration_job.sh')
        shell.exec('/home/db_migration_project_s2042203/sql-database-migration/api/controllers/migrate/start_migration_job.sh')
        res.status(200).json({
            message: 'Migration Job Started',
          });
    } catch (error) {
        console.log(error)
    }
}

module.exports = { ping, createConnectionProfile, createDestinationConnectionProfile, createMigrationJob, startMigrationJob }
