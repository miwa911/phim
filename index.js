'use strict'

// require('dotenv').config({silient: true})
require('now-logs')('phim.clgt.vn')

const server = require('./lib/server')
const port = process.env.PORT || 5000
server.listen(port, () => {
  console.log(`app run on http://0.0.0.0:${port}`)
})
