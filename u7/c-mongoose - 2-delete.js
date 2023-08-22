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

async function run31 () {

// сохраниение в БД
    await u31.save(); 
    console.log('u31 saved CCCCCCCCCCCCCCCCC');
    console.log(u31._doc);
    console.log(u31.name);
}
// run31();


//************************************************************************ */

// ******************1 способ УДАЛЕНИЯ (вызов метода инстанса)********************
/*
async function del31() {
    await u31.remove();    
    console.log('u31 removed');}

//del31();

*/
// ******************2 способ УДАЛЕНИЯ(вызов метода удаления на модели)********************
/*
async function del32() {
    await M3muser.remove({name:"Carl"});    
    console.log('u31 removed +++');}

del32();

*/

//************************3 способ удаления*************************************** */

async function del33() {
    await M3muser.deleteOne({name:"Carl"});    
    console.log('u31 deleted +++');}

//del33();

//***************4 удаление всей коллекции **********************************
async function del34() {
    await M3muser.deleteMany({});    
    console.log('all deleted +++');}

// del34();

//*********************запуск в правильной последовательности */

async function delAll() {
    await run31();
    await del34();
    console.log("EveryThing deleted");
}
delAll();

