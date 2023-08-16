// 3) С ИСПОЛЬЗОВАНИЕМ ASYNC/AWAIT

const MongoClient = require("mongodb").MongoClient; 

const URL='mongodb://127.0.0.1:27017/'
const DATA_BASE_NAME='moviebox';


const mongoClient = new MongoClient(URL);

async function dbConnect () {

   let conn = await mongoClient.connect()
   const db=conn.db(DATA_BASE_NAME);   

   return db;   
   
   
}

module.exports=dbConnect;


