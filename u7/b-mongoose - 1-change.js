const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testdb');
// mongoose.connect('mongodb://localhost/testdb', ()=> {cobsole.log('connected')}, e=>console.error(e));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})
/*
var M2muser = mongoose.model("Muser", userSchema) // не работает!!!!!!!!!
const u21 = new M2muser({name:"Bob", age:22});
*/
var M2muser = mongoose.model("Muser", userSchema); // Почему-то заработало!
//**************************1 метод создания документа************************************************* */
// создание инстанса из модели
const u21 = new M2muser({name:"Bob", age:22});

/*
// сохраняем документ и выводим данные в консоль
u21.save().then(()=> {
    console.log('u2 saved BBBBBBBBBBBBBBB');
    console.log(u21._doc);
    console.log(u21.name);

});
*/
// ******************1 способ изменения документа ********************
/*
// шаг 1 - изменяем поле документа
u21.name ="Bob1111"; 

// шаг 2 - сохраняем
u21.save().then(()=> {
    console.log('u2 saved BBBBBBBBBBBBBBB');
    console.log(u21._doc);
    console.log(u21.name);

});
*/

// ******************2 способ изменения документа ********************

u21.update({name:"Bob22222"}, {upsert:true}).then((m) =>{
    
    console.log('u21 saved BBBBBBBBBB++++2');
    console.log(u21._doc);
    console.log(u21.name);
    console.log(m);

})


