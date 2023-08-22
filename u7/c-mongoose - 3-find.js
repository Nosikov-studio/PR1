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

//*************************************************** */

async function runF () {

//  запрос в БД
    let all = await M3muser.find({}).exec();
    console.log(all);
       
}
// runF();
//*************************************************** */
async function runFOne () {

    //  запрос в БД
        let u3 = await M3muser.findOne({name:"Bob"}).exec();
        // console.log(u3);
        console.log(u3._doc);
        console.log(u3.name);
           
    }
//runFOne();

//*************************************************** */

