const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testdb');
// mongoose.connect('mongodb://localhost/testdb', ()=> {cobsole.log('connected')}, e=>console.error(e));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

var M2muser = mongoose.model("Muser", userSchema); 

//******************************************************************* */
// M2muser.find({}).exec().then((all)=>{console.log(all)});

//******************************************************************* */
M2muser.findOne({name:"Bob"}).exec().then((u)=>{
    // console.log(u)
    console.log(u._doc);
    console.log(u.name);

});
