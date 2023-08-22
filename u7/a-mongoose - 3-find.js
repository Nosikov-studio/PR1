const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/testdb');
// mongoose.connect('mongodb://localhost/testdb', ()=> {cobsole.log('connected')}, e=>console.error(e));

const userSchema = new mongoose.Schema({
    name: String,
    age: Number
})

// создание модели
var M1muser = mongoose.model("Muser", userSchema) // написал Muser чтобы проследить логику 

//********************************************************************** */
M1muser.find({}, function (err, all) {
   
  if (err) {
      console.log(err);
  }
  console.log(all);
  //console.log(u1._doc);
  //console.log(u1.name);
});

//*********************************************************************** */
/*
M1muser.findOne({ name: 'Alice' }, function (err, u1) {
   
    if (err) {
        console.log(err);
    }
    // console.log(u1);
    console.log(u1._doc);
    console.log(u1.name);
  });

//********************************************************************** */
/*
M1muser
  .findOne({ name: 'Alice' })
  .exec(function (err, u1) {
    if (err) {
        console.log(err);
    }
    // console.log(u1);
    console.log(u1._doc);
    console.log(u1.name);
  });
*/