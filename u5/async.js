

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

// sl.then(d =>console.log(d)).catch(()=>console.log('error'));

const getData = async () => {

    let y= await sl; 
    console.log('y='+y);
    let z= await sl; 
    console.log('z='+z);
    let sum=y+z;
    console.log('------------------'); 
    console.log('sum='+sum);
    console.log('++++++++++++++++++');              
    return sum*100
    }

let x1=getData();
// let w= await getData(); // error!
console.log('x1='+x1);
// console.log('w='+w); // error!
console.log('***************************************')

getData().then(data=> console.log("x1="+data+"!!!!!!!!!!!!!!"));

