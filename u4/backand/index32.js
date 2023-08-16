const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const dbConnect=require('./connection-32');
const PORT = 3032;
const COLLECTION_NAME='movies';

const app = express();
app.use(express.json());

var database;


const main =async ()=> {
  database= await dbConnect();
  console.log('Connected to MongoDB');
  
  app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
});  
}

main();

//*******************************GET ALL******************************************** */
app.get('/movies', (req, res)=> {
  const m=[];
  const col=database.collection(COLLECTION_NAME);
  let cursor=col.find();
  cursor.forEach((movie)=>m.push(movie))
  .then(()=>{
    res
    .status(200)
    .json(m);
  })
  .catch(()=>{
    res
      .status(500)
      .json({error: "Something goes wrong..."});
  })

})



