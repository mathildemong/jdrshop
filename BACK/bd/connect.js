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

module.exports = {connect, bd, closeConnection}