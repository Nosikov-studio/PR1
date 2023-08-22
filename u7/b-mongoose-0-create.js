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
/*
const u21 = new M2muser({name:"Bob", age:22});

u21.save().then(()=> console.log('u2 saved BBBBBBBBBBBBBBB'));

//**************************2 метод создания документа**************************************************** */
/*
const u22 = M2muser.create({name:"Bill", age:22});
u22.then(()=> console.log('u22 saved BBBBBBBBBBBBBBB'));
*/

// тоже самое можно в одну строчку:
M2muser.create({name:"Bill", age:22}).then(()=> console.log('u22 saved BBBBBBBBBBBBBBB'));

