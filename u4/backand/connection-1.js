//1) СТАРЫЙ (deprecated!!!) МЕТОД ПОДКЛЮЧЕНИЯ ЧЕРЕЗ КОЛЛБЭК
// https://nodejsdev.ru/guides/webdraftt/mongodb/#_1
// https://www.youtube.com/watch?v=5a1eJcJ0aNg
// https://www.youtube.com/watch?v=P87LNAfPtIc

const MongoClient = require('mongodb').MongoClient;

MongoClient.connect(
  'mongodb://localhost:27017',
  (err, client) => {
      if (err) {
          console.log('Connection error: ', err);
          throw err;
      }
      console.log('Connected');

      // const db = client.db('moviebox');
      const col= client.db('moviebox').collection('movies');
      
      var cursor=col.find();
      
      
      cursor.toArray(function(err, result) {
        console.log(result);
        client.close();
      })
      // курсор??? что это???  

      
  }
);
