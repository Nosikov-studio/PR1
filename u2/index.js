const express = require('express')
const app = express()
const port = 3003
const { v4: uuidv4 } = require('uuid'); // описание https://github.com/uuidjs/uuid

const shortid = require('shortid'); // https://www.npmjs.com/package/shortid


const fs =require('fs')

app.use(express.json());
app.use(express.urlencoded({ extended: false })); // используем встроенный qs (false), внешний модуль (true) является одной из зависимостей самого express

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('form', { title: 'Hey', message: 'Hello there!' })
})
// *************************************************************************
app.post('/sum', (req, res) => {
  let summa= Number(req.body.x) + Number(req.body.y);

  res.send(summa+"");
})

// *************************************************************************
app.get('/u', (req, res) => {
    let id=uuidv4();                // вызов функции создания идентификатора
    res.send(id)
  })
// *************************************************************************
app.post('/u', (req, res) => {

    let id=uuidv4(); 
    
    let ob= {
        "id": id,
        "name": req.body.name,
        "infa": req.body.infa
    };
        
    let obList=fs.readFileSync('bd.json', 'utf8');
    let obListr=JSON.parse(obList);
    
    let arr =[...obListr];
    arr.push(ob);
    
    let arr2=JSON.stringify(arr);
    fs.writeFileSync('bd.json', arr2);

   /*
    let ob= {
        "id": id,
        "name":"Danila",
        "infa": "master"
    };
    */
    console.log(ob);
    res.send(ob);

})
// *************************************************************************
// *************************************************************************
app.get('/s', (req, res) => {
  let id=shortid.generate();                // вызов функции создания идентификатора
  console.log(shortid.generate());
  res.send(id)
})
// *************************************************************************
app.get('/d', (req, res) => {
  let d=Date.now();                
  console.log(d);
  
  res.send(d+"");  // +""  -иначе выдает ошибку RangeError [ERR_HTTP_INVALID_STATUS_CODE]: Invalid status code
})
// *************************************************************************
// ID по порядку от 1 до ...
app.post('/n', (req, res) => {

        
  let obList=fs.readFileSync('bd2.json', 'utf8');
  let n;
  let arr=[];

  if(obList){
  let obListr=JSON.parse(obList);  
  arr =[...obListr];
  n=arr.length+1;
  console.log(arr);
  } else {
    n=1;
  console.log("создан пустой массив");
  }
  
  let ob= {
      "id": n,
      "name": req.body.name,
      "infa": req.body.infa
  };

  arr.push(ob);
  
  let arr2=JSON.stringify(arr);
  fs.writeFileSync('bd2.json', arr2);

 
  console.log(ob);
  res.send(ob);

  
})
// *************************************************************************
// Как JSON записывать в файл в удобочитаемом виде???
app.get('/f', (req, res) => {

  let ob= {
    "id": 000,
    "name":"Danila",
    "infa": "master"
};
  
  let obst =JSON.stringify(ob, null, 4); // 4 - пробела
  // let obst =JSON.stringify(ob, 1, 2); - другой вариант (где 2 - пробелов)
  fs.writeFile('test.json', obst, function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log("JSON saved to ");
    }}
    );

  res.send(ob);
})
// *************************************************************************
/*fs.writeFileSync(file, msg, flag) флаги файловой системы
https://nodejs.org/api/fs.html#file-system-flags
r+ — открыть файл для чтения и для записи.
w+ — открыть файл для чтения и для записи, установив указатель потока в начало файла. Если файл не существует — он создаётся.
a — открыть файл для записи, установив указатель потока в конец файла. Если файл не существует — он создаётся.
a+ — открыть файл для чтения и записи, установив указатель потока в конец файла. Если файл не существует — он создаётся.
...
flag <string> See support of file system flags. Default: 'w'.


https://habr.com/ru/companies/ruvds/articles/424969/
*/
app.get('/flag', (req, res) => {

  let ob= {
    "id": 666,
    "name":"Danila5",
    "infa": "master5"
};
  
  let obst =JSON.stringify(ob, null, 4);
  fs.writeFileSync('flaga.json', obst, {encoding: "utf8", flag:'a', mode: 0o666});

  res.send(ob);
})

//*************************************************************************** */

// запросы вида http://127.0.0.1:3003/about?id=3&name=tom
app.use("/about", function(request, response){
      
  let id = request.query.id;
  let userName = request.query.name;
  response.send("<h1>Информация</h1><p>id=" + id +"</p><p>name=" + userName + "</p>");
});
//******************************************************************** */

app.get('/form2', (req, res) => {
  res.render('form2', { title: 'Hey', message: 'Hello there!' })
})
//********************************************************************* */
// Передача данных формы методом GET через query строку
app.get('/sum2', (req, res) => {
  //let summa= Number(req.body.x) + Number(req.body.y);
  //res.send(summa+"");
  let summa= Number(req.query.x) + Number(req.query.y);
  res.send(summa+"");
})

//******************************************************************* */

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//********************************************************************* */
