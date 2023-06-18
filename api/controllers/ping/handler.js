const util = require('util');
const exec = require('child_process').exec;

const ping = async (req, res) => {
    res.apiResponse('pong')
}

const createConnectionProfile = async (req, res) => {
    // res.apiResponse('bob')
    const command = 'curl --header "Authorization: Bearer $(gcloud auth application-default print-access-token)" \ --header "Content-Type: application/json" \ --data @./connection_profile.json \ -X POST \ https://datamigration.googleapis.com/v1/projects/db-migration-project-s2042203/locations/europe-west2/connectionProfiles?connectionProfileId=on-prem-sql-profile'

    child = exec(command, function (error, stdout, stderr) {

        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);

        if (error !== null) {
            console.log('exec error: ' + error);
        }

    });
}

module.exports = { ping, createConnectionProfile }
