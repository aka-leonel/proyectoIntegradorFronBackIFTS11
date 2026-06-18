const dotenv = require('dotenv')
dotenv.config()

exports.configDB = {
  uri: process.env.MONGO_URI
}
