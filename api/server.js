// Stablish connection with MongoDb
// Personal and private data were described on dotenv file only

const { myCluster, myUsername, myPassword, myDatabase} = require ('../api/config/config.js');
const mongoose = require ('mongoose');
const http = require('http');
const uri = `mongodb+srv://${myUsername}:${myPassword}@${myCluster}.mongodb.net/${myDatabase}`; 

mongoose
    .connect(uri,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 5000
        })
    .then(() => {
        console.log("Connected to MongoDb");
    })
    .catch( err => 
        console.log(err.reason));

mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

module.exports = mongoose;