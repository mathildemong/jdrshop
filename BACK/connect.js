const {MongoClient, Db} = require('mongodb')

let client = null;

async function connect(url, callback){
  console.log(`Trying to connect to ${url} ...`)
  if (client == null){
    client = new MongoClient(url, {
      connectTimeoutMS: 1000,
      
    });
    try {
      await client.connect()
      return callback()
    } catch (err) {
      return callback(err) 
    }
  } else {
    return  callback();
  }
}
function bd(){
  return new Db(client, "bddjdr");
}
function closeConnection(){
  if (client){
		client.close();
		client = null;
  };
};


// const mongoose = require('mongoose');
// const USER =  process.env.USER_DB;
// const PASSWORD = process.env.PASSWORD_DB
// const NAME = process.env.NAME_DB
// const uri = `mongodb+srv://${USER}:${PASSWORD}@${NAME}.8t8ceqc.mongodb.net/?retryWrites=true&w=majority`;

// mongoose.connect(uri)
//     .then(() => console.log('Connected to MongoDB'))
//     .catch(err => console.log(err))

module.exports = {connect, bd, closeConnection}