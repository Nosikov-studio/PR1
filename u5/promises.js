//*************************************************pr1***************************************************** */
const pr1 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        if(true){
            resolve("text!!!!!!!!!!!!!");
        } else {
            reject();
        }   
    
}, 2000);

})

pr1.then(d =>console.log(d)).catch(()=>console.log('error'));

/*************************************************pr2***************************************************** */
const pr2 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        if(true){
            let x=55;
            let y=77;
            let z=x+y;
            resolve(z);
        } else {
            reject();
        }   
    
}, 2000);

return 88888;
})

pr2.then(d =>console.log(d)).catch(()=>console.log('error'));
/*************************************************pr3***************************************************** */
const pr3 = new Promise((resolve, reject) => {
    setTimeout(()=> {
        if(true){
            
            resolve({data:[17,55.98], name:"ivan"});
        } else {
            reject();
        }   
    
}, 2000);

return 88888;
})

//ВАРИАНТЫ ИСПОЛЬЗОВАНИЯ СОЗДАННОГО ПРОМИСА
// 1
// pr3.then(d =>{console.log(d); console.log(d.name); return 'done'}).catch(()=>console.log('error'));

//2 через обычную функцию (внутри обычное испльзование промиса)
/*
const getData1 = () => {pr3
.then(d =>{console.log(d); console.log(d.name); return 'done'})
.catch(()=>console.log('error'));
}

getData1()
*/
//3 через асинхронную функцию

const getData2 = async () => {
    console.log(await pr3); 
    console.log((await pr3).name);
    console.log('++++++++++++++++++')              //!!!!!!!!
    return 'done'
    }
    
//getData2()
//console.log('***********************');
getData2().then(fata => console.log(fata+"3333"));