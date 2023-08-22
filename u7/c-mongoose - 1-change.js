const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testdb');
// mongoose.connect('mongodb://localhost/testdb', ()=> {cobsole.log('connected')}, e=>console.error(e));

// создание схемы
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

// создание модели
var M3muser = mongoose.model("Muser", userSchema) // написал Muser чтобы проследить логику 
// создание инстанса из модели
const u31 = new M3muser({name:"Carl", age:33});
//***********************1 метод создания документа (вызов метода на инстансе)********************************************* */
/*
async function run31 () {

// сохраниение в БД
    await u31.save(); 
    console.log('u31 saved CCCCCCCCCCCCCCCCC');
    console.log(u31._doc);
    console.log(u31.name);
}
run31();

*/
//************************************************************************ */

// ******************1 способ изменения документа ********************

// шаг 1 - изменяем поле документа
u31.name ="Cevin1111"; 

// шаг 2 - сохраняем
async function run32 () {

    // сохраниение в БД
        await u31.save(); 
        console.log('u31 saved CCCCC++++++++++');
        console.log(u31._doc);
        console.log(u31.name);
    }
    run32();

