const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testdb');
// mongoose.connect('mongodb://localhost/testdb', ()=> {cobsole.log('connected')}, e=>console.error(e));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

// создание модели
var M1muser = mongoose.model("Muser", userSchema) // написал Muser чтобы проследить логику 


// создание инстанса из модели
const u11 = new M1muser({name:"Alice", age:11});


// сохраняем документ и выводим данные в консоль
u11.save(function(err, u11){
    if (err) {
        console.log(err);
    }
    console.log('u11 saved AAAAAAAAAAAA');
    console.log(u11._doc);
    console.log(u11.name);

});

// ******************1 способ УДАЛЕНИЯ ********************
/*
u11.remove(function(err, u11){
    if (err) {
        console.log(err);
    }
    console.log('u11 removed');})

*/
// ******************2 способ УДАЛЕНИЯ (вызов метода удаления на модели)********************
M1muser.remove({name:"Alice"}, function(err) {
    if (err) {
        console.log(err);
    }
    console.log('removed')
});
