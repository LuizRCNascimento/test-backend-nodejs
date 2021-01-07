const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  myUsername: process.env.MyUsername,
  myPassword: process.env.MyPassword,
  myCluster: process.env.MyCluster,
  myDatabase: process.env.MyDatabase,
  port: process.env.port,
  secret: process.env.secret,
  JWT_key: process.env.JWT_key
}

