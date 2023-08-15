// 2) НОВЫЙ МЕТОД ПОДКЛЮЧЕНИЯ ЧЕРЕЗ ПРОМИС

 //**************************************************************************** */
  const MongoClient = require('mongodb').MongoClient;
  MongoClient.connect('mongodb://localhost:27017/')
  .then(client => client.db('moviebox').collection('movies').find().toArray())
  .then(data => console.log(data)).catch(err => console.log(err));

  