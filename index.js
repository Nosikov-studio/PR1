const express = require('express');
const fs=require('fs');
const app = express();
const port = 3005;

app.use(express.json()); // ????????????? работает и без этой строки
var apiRouter=require('./routes/api');
app.use('/api', apiRouter);

let bodyParser = require('body-parser');
let urlencodeParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs');
app.use('/public', express.static('public'));


//Чтение из файла
let file = fs.readFileSync('bd.json', 'utf8');
let jsObjectFirms = JSON.parse(file);

app.get('/', function (req, res) {
  res.render('add');
});

app.get('/:name', function(req, res) {
  if(req.params.name === 'add') {
      res.render('add');
  } else if(req.params.name === 'view') {
      res.render('view', {data:jsObjectFirms});
  } else {
      res.sendFile(__dirname + '/404.html');
  }  
});

//Форма
app.post('/add', urlencodeParser, function(req, res) {
  if(!req.body) return res.sendStatus(400);
  console.log(req.body);
  let jsonData = fs.readFileSync('bd.json' , 'utf8');
  let all = jsonData.substring(0, jsonData.length-1)+', '+JSON.stringify(req.body)+"]";
  console.log(all);
  fs.writeFileSync('bd.json', all, function(error) {
      if(error) throw error;
      console.log("Асинхронная запись файла завершена.");
  });
  res.render('add');
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})