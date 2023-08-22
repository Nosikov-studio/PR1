const mongoose = require('mongoose');
const Movie=require('./models/movie');

const URL='mongodb://127.0.0.1:27017/moviebox';
const DATA_BASE_NAME='moviebox';
const COLLECTION_NAME='movies';   //?????????? 

mongoose
  .connect(URL)
  .then(()=> console.log('Connected to MongoDB'))
  .catch((err)=> console.log (`DB connection error: ${err}`));
//****************************************************************************** */
mongoose.connection.on('connected', ()=>{
    console.info('Всё заебись!');
})

mongoose.connection.on('error', ()=>{
    console.info('Хуёво!');
})
//****************************************************************************** */
 /*
Movie
  .find()
  .sort({ title: 1})      // курсор обработан под капотом
  .then((movies)=> {      // данные возвращаются уже готовым массивом в промисе
    console.log (movies)
  })
  .catch(()=> {console.log('Something goes wrong...')})

  //*************************************************************************** */
  
  
  Movie
  .find({title: 'Fight Club'})
  .then((movie) => {
      console.log (movie)
  })
  .catch(()=> {console.log('Something goes wrong...')})



   //*************************************************************************** */
  /*
  const id = "64b8e107b9cf81330720c5fd";
Movie
    .find({_id: id})
    .then((movie) => {
        console.log (movie)
    })
    .catch(()=> {console.log('Something goes wrong...')})
*/