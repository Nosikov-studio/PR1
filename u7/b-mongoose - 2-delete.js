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


// сохраняем документ и выводим данные в консоль
u21.save().then(()=> {
    console.log('u2 saved BBBBBBBBBBBBBBB');
    console.log(u21._doc);
    console.log(u21.name);

});

// ******************1 способ УДАЛЕНИЯ ********************
/*
u21.remove().then(()=> {
    
    console.log('u21 removed');})
*/
// ******************2 способ УДАЛЕНИЯ (вызов метода удаления на модели)********************
M2muser.remove({name:"Alice"}).then(()=>{console.log('removed 2')})



