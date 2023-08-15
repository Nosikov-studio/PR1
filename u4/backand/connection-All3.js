//1) СТАРЫЙ МЕТОД ПОДКЛЮЧЕНИЯ ЧЕРЕЗ КОЛЛБЭК
/*
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
  'mongodb://localhost:27017',
  (err, client) => {
      if (err) {
          console.log('Connection error: ', err);
          throw err;
      }
      console.log('Connected');
      client.close();
  }
);
*/
//**************************************************** */

// 2) НОВЫЙ МЕТОД ПОДКЛЮЧЕНИЯ ЧЕРЕЗ ПРОМИС
/*
const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/').then((client) => {
    console.log('Connected to MongoDB');
    console.log(client);
  })
*/
//**************************************************** */

// 3) С ИСПОЛЬЗОВАНИЕМ ASYNC/AWAIT

/*
const MongoClient = require("mongodb").MongoClient; 

const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");

async function connectToMongo() {
   await mongoClient.connect()
   console.log('Connected to MongoDB');
}
connectToMongo()
*/
