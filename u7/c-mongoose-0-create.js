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

//***********************1 метод создания документа (вызов метода на инстансе)********************************************* */
async function run31 () {
// создание инстанса из модели
    const u31 = new M3muser({name:"Carl", age:33});
// сохраниение в БД
    await u31.save(); 
    console.log('u31 saved CCCCCCCCCCCCCCCCC');

}
// run31();
//************************************************************************ */

//**************************2 метод создания документа (вызов метода на самой модели)**************************************************** */
async function run32 () {
    await M3muser.create({name:"Clementina", age:32});
    console.log('u32 saved CCCCCCCCCCCCCCCCCC');
}

run32()