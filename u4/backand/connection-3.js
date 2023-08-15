// 3) С ИСПОЛЬЗОВАНИЕМ ASYNC/AWAIT

const MongoClient = require("mongodb").MongoClient; 

const mongoClient = new MongoClient("mongodb://127.0.0.1:27017/");

async function connectToMongo() {
   await mongoClient.connect()
   console.log('Connected to MongoDB');

   const db = mongoClient.db('moviebox');
   const col = db.collection('movies');
   const results = await col.find().toArray();
   console.log(results);
   
}
connectToMongo()

