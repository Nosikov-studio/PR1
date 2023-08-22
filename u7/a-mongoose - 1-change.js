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
    console.log('u1 saved AAAAAAAAAAAA');
    console.log(u11._doc);
    console.log(u11.name);

});

// ******************1 способ изменения документа ********************
/*
// шаг 1 - изменяем поле документа
u11.name ="Alice1111"; 

// шаг 2 - сохраняем
u11.save(function(err, u11){
    if (err) {
        console.log(err);
    }
    console.log('u1 saved AAAAAAAAAAAA++++++++++++++');
    console.log(u11._doc);
    console.log(u11.name);

});

*/
// ******************2 способ изменения документа ********************
/*
u11.update({name:"Alice22222"}, {upsert:true}, function(err, m){
    if (err) {
        console.log(err);
    }
    console.log('u1 saved AAAAAAAAAAAA++++++++++++++2');
    console.log(m);
    

})
*/
