const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  genres: [String],
  rating: Number,
  duration: {
    hours: Number,
    minutes: Number,
  },
  reviews: [{
    name: String,
    text: String,
  }]
});

const Movie = mongoose.model('Movie', movieSchema);
module.exports = Movie;

/* По умолчанию коллекция будет браться исходя из названия модели (Movie),
приводя его ко множественному числу (movies)

В ДОКУМЕНТАЦИИ: Mongoose automatically looks for the plural, lowercased version of your model name.

***
НАЗВАНИЕ КОЛЛЕКЦИИ МОЖНО ЗАДАТЬ В НАСТРОЙКАХ СХЕМЫ!!!
**************************************************
Настройки схемы 
new Schema({  ... }, options);
...
or

const schema = new Schema({  ...  });
schema.set(option, value);
***

const dataSchema = new Schema({  ...  }, { collection: 'data' });

collection: str - определяет название коллекции (по умолчанию используется название модели)

*/