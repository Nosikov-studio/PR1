const MongoClient = require("mongodb").MongoClient; 

const URL='mongodb://127.0.0.1:27017/'
const DATA_BASE_NAME='moviebox';
const COLLECTION_NAME='movies';

const mongoClient = new MongoClient(URL);

async function getDate () {

   let conn = await mongoClient.connect()
   // console.log('Connected to MongoDB');
   const db = conn.db(DATA_BASE_NAME);
   let col=db.collection(COLLECTION_NAME);
    let cursor = col.find();
    let data = await cursor.toArray();
   console.log(data);
       
}

getDate();



