const {MongoClient, Db} = require('mongodb')

let client = null;

function connect(url, callback){
  console.log(`Trying to connect to ${url} ...`)
  if (client == null){
    client = new MongoClient(url, {
      connectTimeoutMS: 1000,
      
    });
    client.connect().then((theClient) => {
      console.log('Connected, returning...')
      client = theClient
      return callback()
    })
    .catch((err) => {
      callback(err)
    })
  } else {
    callback();
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