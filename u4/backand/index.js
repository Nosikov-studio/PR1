const express = require('express');
const { ObjectId } = require('mongodb');
const PORT = 3000;

const app = express();
app.use(express.json());

const dbConnect=require('./connection-31');

let col;

const main =async ()=> {
  col= await dbConnect();
  console.log('Connected to MongoDB');
  
  app.listen(PORT, (err) => {
  err ? console.log(err) : console.log(`Listening port ${PORT}`);
});
  //let data= await col.find().toArray();
  //console.log(data);
}

main();
//************************************error********************************************** */
const handleError =(res, error) => {
  res.status(500).json({error}) 
}

//*******************************GET ALL******************************************** */
app.get('/movies', (req, res)=> {
  const m=[];
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

//***********************************GET ID**************************************** */
/*
app.get('/movies/:id', (req, res)=> {
  
  col.findOne({_id: ObjectId(req.params.id)})
  
  .then((doc)=>{
    res
    .status(200)
    .json(doc);
  })
  .catch(()=>{
    res
      .status(500)
      .json({error: "Something goes wrong..."});
  })

})
*/

//*********************************GET ID с вал. ID****************************************** */
// с валидацией id
app.get('/movies/:id', (req, res)=> {
  
  if(ObjectId.isValid(req.params.id)) {

    col.findOne({_id: ObjectId(req.params.id)})
  
  .then((doc)=>{
    res
    .status(200)
    .json(doc);
  })
  .catch(()=>{
    res
      .status(500)
      .json({error: "Something goes wrong..."});
  })


  } else {
    res
      .status(500)
      .json({error: "Wrong Id"});

  }  
})

//********************************DELETE************************************** */
app.delete('/movies/:id', (req, res)=> {
  
  if(ObjectId.isValid(req.params.id)) {

    col.deleteOne({_id: ObjectId(req.params.id)})
  
  .then((result)=>{
    res
    .status(200)
    .json(result);
  })
  .catch(()=>{
    res
      .status(500)
      .json({error: "Something goes wrong..."});
  })


  } else {
    res
      .status(500)
      .json({error: "Wrong Id"});

  }  
})

//********************************POST************************************** */
app.post ('/movies', (req, res)=> {
  col.insertOne(req.body)
  
  .then((result)=>{
    res
    .status(201)
    .json(result);
  })
  .catch(()=>{
    res
      .status(500)
      .json({error: "Something goes wrong..."});
  })
})

//********************************PATCH************************************** */
app.patch('/movies/:id', (req, res) => {
  if(ObjectId.isValid(req.params.id)) {

    col.updateOne({_id: ObjectId(req.params.id)}, { $set: req.body})
  
  .then((result)=>{
    res
    .status(200)
    .json(result);
  })
  .catch(()=>{
    res
      .status(500)
      .json({error: "Something goes wrong..."});
  })


  } else {
    res
      .status(500)
      .json({error: "Wrong Id"});

  }  


})