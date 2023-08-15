const {MongoClient} = require('mongodb') // подключаем основной его объект mondoClient
const URL='mongodb://localhost:27017/moviebox' // можно узнать в БД,здесь moviebox - имя БД

// const MongoDBclient = new MongoClient('mongodb://Timeweb:cloud@127.0.0.1:27017/?authMechanism=DEFAULT')

const mdbc=new MongoClient('mongodb://localhost:27017/');
console.log(mdbc);


/*
let dbConnection;

module.exports = {
  connectToDb: (cb) => {
    MongoClient
      .connect(URL)
      .then((client) => {
        console.log('Connected to MongoDB');
        dbConnection = client.db();
        return cb();
      })
      .catch((err) => {
        return cb(err);
      });
  },
  getDb: () => dbConnection,
}

*/