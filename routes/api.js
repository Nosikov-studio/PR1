var express= require('express');
var router=express.Router();
const fs1=require('fs');
// const uuid=require('uuid/v1');


router.get('/', function(req, res) {
    //res.send('my api tut')
    let f = fs1.readFileSync('bd.json', 'utf8');
    //console.log(f);
    let jsOb = JSON.parse(f);    
    let jsObs = JSON.stringify(jsOb);
    console.log(jsObs);
    res.json(jsObs);
    // res.json({"name":"help","id":"none"}); // ??????????? ПРОБЛЕМА В ПОВТОРНОМ ВЫСТАВЛЕНИИ ЗАГОЛОВКОВ
});

router.get('/:id', function(req, res) {
    
    //let i=req.params.id // это строковый тип
    //res.send(i);
    let id=parseInt(req.params.id, 10); // это число
    console.log(id);
    let f = fs1.readFileSync('bd.json', 'utf8');
    let jsOb = JSON.parse(f);   
    
    const agent=jsOb.find(ag => ag.id===id);
    
    if(agent){
        return  res.json(agent);
    }
    return res.status(404).json({status: 'not found'});
   
    
});

router.post('/', function(req, res) {
    console.log(req.body);
    const agn = {
       // id: uuid(),
        id: req.body.id || 'default id',
        number: req.body.number || 'default number',
        email: req.body.email || 'default email',
        website: req.body.website || 'default website',
        owner: req.body.owner || 'default owner',
        privacy: req.body.privacy || 'default privacy',
        city: req.body.city || 'default city',
        comment: req.body.comment || 'default comment'
    }
    let f = fs1.readFileSync('bd.json', 'utf8');
    //console.log(f);
    let jsOb = JSON.parse(f); 
    jsOb.push(agn);
    let jsObs = JSON.stringify(jsOb);
    console.log(jsObs);
    fs1.writeFileSync('bd.json', jsObs, function(error) {
        if(error) throw error;
        console.log("Асинхронная запись файла завершена.");
    });
    
    return res.json(jsOb);
})


router.put('/:id', function(req, res) {
    
    let id=parseInt(req.params.id, 10); // это число
    console.log(id);
    let f = fs1.readFileSync('bd.json', 'utf8');
    let jsOb = JSON.parse(f);   
    
    /* ПЛОХАЯ ИДЕЯ РАБОТАТЬ С ОТДЕЛЬНЫМ ОБЪЕКТОМ
    const agent=jsOb.find(ag => ag.id===id);
    //return  res.json(agent);
    if(agent){
        agent.id = req.body.id;
        agent.number= req.body.number;
        agent.email= req.body.email;
        agent.website= req.body.website;
        agent.owner= req.body.owner;
        agent.privacy= req.body.privacy;
        agent.city= req.body.city;
        agent.comment= req.body.comment;

       return  res.json(agent);
    }
    return res.status(404).json({status: 'not found'});
*/
jsOb.forEach((el)=> {
    if (el.id===id) {
        el.number= req.body.number;
        el.email= req.body.email;
        el.website= req.body.website;
        el.owner= req.body.owner;
        el.privacy= req.body.privacy;
        el.city= req.body.city;
        el.comment= req.body.comment;

    }
   })
   const newel=jsOb.find(ag => ag.id===id);
   

   let jsObs = JSON.stringify(jsOb);

   fs1.writeFileSync('bd.json', jsObs, function(error) {
    if(error) throw error;
    console.log("Асинхронная запись файла завершена.");
});

    return  res.json(newel);
})


router.delete('/:id', function(req, res) {
    
    let id=parseInt(req.params.id, 10); // это число
    console.log(id);
    let f = fs1.readFileSync('bd.json', 'utf8');
    let jsOb = JSON.parse(f);   

    const newbd=jsOb.filter(ag => ag.id !=id);


    const existel=newbd.find(ag => ag.id===id);

    let jsObs = JSON.stringify(newbd);

   fs1.writeFileSync('bd.json', jsObs, function(error) {
    if(error) throw error;
    console.log("Асинхронная запись файла завершена.");
});

    if(!existel) {
        return res.send(`el with id=${id} was deleted`).status(200);
    }else{return res.send(`wrong`).status(400);}

})


module.exports = router;

