const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testdb');
// mongoose.connect('mongodb://localhost/testdb', ()=> {cobsole.log('connected')}, e=>console.error(e));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

// создание модели
var M1muser = mongoose.model("Muser", userSchema) // написал Muser чтобы проследить логику 

//**************************1 метод создания документа (вызов метода на инстансе)************************************************* */
/*
// создание инстанса из модели
const u11 = new M1muser({name:"Alice", age:11});

// в коллбэке функция, позволяющая обработать возвращаемый ответ, в том числе ошибку...
u11.save(function(err){
    if (err) {
        console.log(err);
    }
    console.log('u1 saved AAAAAAAAAAAA')
});
*/
//**************************2 метод создания документа (вызов метода на самой модели)************************************************* */
M1muser.create({name:"Anna+++", age:12}, function(err) {
    if (err) {
        console.log(err);
    }
    console.log('u12 saved AAAAAAAAAAAA')
});

