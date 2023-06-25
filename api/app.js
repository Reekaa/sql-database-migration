var mysql = require('mysql2');

// Load ENV vars
const dotEnvOption = {
  silent: true,
  path: 'env/dev.env'
}


if (process.env.NODE_ENV === 'production') {
  dotEnvOption.path = 'env/prod.env'
}

require('dotenv').config(dotEnvOption)

// Load deps
const express = require('express')
const compress = require('compression')
const helmet = require('helmet')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')

/* Create Express instance
 * ----------------------- */
const app = express()


/* Setup default middlewares
 * ------------------------- */
app.use(compress())
app.use(bodyParser.json({ limit: '1mb' }))
app.use(bodyParser.urlencoded({ limit: '1mb', extended: true }))


morgan.token('current_user', (req) => (req.user ? req.user.name : 'anonymous'))


/* Setup security middlewares
* -------------------------- */
app.use(helmet.hsts({ maxAge: 10886400000, includeSubDomains: true }))
// app.use(cors({ origin: '*' }))
app.use(cors({ credentials: true, origin: ["http://localhost:3000", "http://localhost:3000", "http://34.105.242.205/api/v1/migrate"] }));


/* Setup DB connection
* ---------------------------- */

var connection = mysql.createConnection({
  host: "34.105.242.205",
  port: "3306",
  user: "myuser",
  password: "mypass",
  database: "test_database"
});

connection.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  // connection.query("SELECT * FROM Claim", function (err, result, fields) {
  //   if (err) throw err;
  //   console.log(result);
  // });
});

//require('./connections')

/* Controllers
* ----------- */
require('./controllers')(app)

module.exports = app

