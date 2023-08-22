const {performance} = require('perf_hooks');

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
    const startTime=performance.now();
    console.log(startTime);
    console.log('123');
    let y= await sl;
    console.log('456');
    let z= await sl;
    console.log('789');
    const endTime=performance.now();
    console.log(endTime);
    return 3;
    }
//*************************************************************** */


getData()
