// 3) С ИСПОЛЬЗОВАНИЕМ ASYNC/AWAIT

const MongoClient = require("mongodb").MongoClient; 

const URL='mongodb://127.0.0.1:27017/'
const DATA_BASE_NAME='moviebox';
const COLLECTION_NAME='movies';

const mongoClient = new MongoClient(URL);

async function dbConnect () {

   let conn = await mongoClient.connect()
   // console.log('Connected to MongoDB');
   const db = conn.db(DATA_BASE_NAME);

   return db.collection(COLLECTION_NAME);   
   
}

module.exports=dbConnect;


