let dj = "";
const vi=document.querySelector('#v');


fetch('http://127.0.0.1:3000/')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    dj=data.name;
    console.log(data);
    vi.innerText=dj; 
  });


console.log("privet!!!!!!!");
console.log(dj);
// vi.innerText=dj; //??? данные ЕЩЁ не получены!!!!S
