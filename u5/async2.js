const sl = new Promise((resolve, reject) => {
    setTimeout(()=> {
        if(true){
            let x=Math.floor(Math.random() * 100);;
            resolve(x);
        } else {
            reject();
        }   
    
}, 2000);
})

//************************************************* */

const getData = async () => {

    let y= await sl; 
    //console.log('y='+y);
    let z= await sl; 
    //console.log('z='+z);
    let sum=y+z;
   // console.log('------------------'); 
    //console.log('sum='+sum);
    //console.log('++++++++++++++++++');              
    return sum*100
    }

let x1=getData(); // промис!!! (вместо значения возвращает промис - асинхр. функция!!!)
// console.log('x1='+x1); // промис!!!
let x2=getData().then(data=> data);
// console.log('x2='+x2); // тоже промис
x2.then(d=>console.log(d));
