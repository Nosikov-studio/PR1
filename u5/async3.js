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

const getData = async (z) => { 

    let y= await sl; 
    
    let sum=y+z;
             
    return sum*100 // вернет в resolv!!!
    }
//*************************************************************** */
let f=0;

getData(777).then(d=> {f=d+3; console.log('f внутри '+ f)}); // эта функция исполнится ассинхронно!

console.log('f вне '+ f);

