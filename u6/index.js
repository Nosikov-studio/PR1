const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Movie=require('./models/movie');

const PORT = 3005;
const URL='mongodb://127.0.0.1:27017/moviebox';
const DATA_BASE_NAME='moviebox';
const COLLECTION_NAME='movies';
app.use(express.json());

mongoose
  .connect(URL)
  .then(()=> console.log('Connected to MongoDB'))
  .catch((err)=> console.log (`DB connection error: ${err}`));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

//****************************GET ALL******************************************** */
app.get('/movies', (req, res) => {
  
Movie
  .find()
  .sort({ title: 1})      // курсор обработан под капотом
  .then((movies)=> {      // данные возвращаются уже готовым массивом в промисе
    res
      .status(200)
      .json(movies)
  })
  .catch(()=> {console.log('Something goes wrong...')})

})
//******************************GET ID******************************************* */
app.get('/movies/:id', (req, res) => {
  Movie
    .findById(req.params.id)
    .then((movie) => {
      res
        .status(200)
        .json(movie);
    })
    .catch(()=> {console.log('Something goes wrong...')})
  
  });
//****************************DELETE*********************************************** */

app.delete('/movies/:id', (req, res) => {
  
    Movie
    .deleteOne(req.params.id)  //?????????????findByIdAndDelete
    .then((result) => {
      res
        .status(200)
        .json(result);
    })
    .catch(() => {console.log("Something goes wrong...")});
  
  })

//**************************************************************************** */



app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
