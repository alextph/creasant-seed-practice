let express = require('express')
let _ = require('lodash')
let log4js = require('log4js')
let cors = require('cors')

let pkg = require('./package.json')

let logger = log4js.getLogger();
logger.level = 'debug'

let app = express();
app.use(cors())

app.get('/api/users', (req, res, next) => {
  let userList = [
    {
      name: 'alex',
      birthday: new Date('1993-12-18')
    },
    {
      name: 'kary',
      birthday: new Date('1993-06-29')
    }
  ]
  res.send(userList);
})

let server = app.listen(pkg.config.port, ()=> {
    logger.info("%s started at http://localhost:%s", pkg.name, server.address().port)
})