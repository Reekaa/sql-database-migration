#!/bin/bash

curl --header "Authorization: Bearer $(gcloud auth application-default print-access-token)" \
     --header 'Content-Type: application/json' \
     --data @/home/db_migration_project_s2042203/sql-database-migration/api/controllers/migrate/connection_profile.json \
     -X POST \
     https://datamigration.googleapis.com/v1/projects/db-migration-project-s2042203/locations/europe-west2/connectionProfiles?connectionProfileId=on-prem-sql-profile