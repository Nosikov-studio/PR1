// Изучаем составляющий
const MongoClient = require('mongodb').MongoClient;
// console.log(MongoClient);

console.log('*******************x1***********************');
/*
let x1 = MongoClient.connect('mongodb://localhost:27017/');
console.log(typeof x1);
console.log(x1);
*/
console.log('*******************x2***********************');
/*
let x2 = MongoClient.connect('mongodb://localhost:27017/').then(client => client.db('moviebox'));
console.log(typeof x2);
console.log(x2);
*/
console.log('*******************x3***********************');
/*
//let x3 = 
MongoClient.connect('mongodb://localhost:27017/')
.then(client => client.db('moviebox'))
.then(data => console.log(data));
//console.log(typeof x3);
//console.log(x3);
*/
console.log('*******************x4***********************');
/*
//let x4 = 
MongoClient.connect('mongodb://localhost:27017/')
.then(client => client.db('moviebox').collection('movies'))
.then(data => console.log(data));
//console.log(typeof x4);
//console.log(x4);
*/
console.log('*******************x5***********************');
/*
//let x5 = 
MongoClient.connect('mongodb://localhost:27017/')
.then(client => client.db('moviebox').collection('movies').find())
.then(data => console.log(data));
//console.log(typeof x5);
//console.log(x5);
*/
console.log('*******************x6***********************');
