const dbConnect=require('./connection-31');

const main =async ()=> {
  let col= await dbConnect();
  let data= await col.find().toArray();
  console.log(data);
}

main();

/*
const express = require('express');
const PORT = 3000;

const app = express();


app.listen(PORT, (err) => {
      err ? console.log(err) : console.log(`Listening port ${PORT}`);
    });

    */