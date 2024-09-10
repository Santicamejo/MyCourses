const h1 = document.querySelector('h1')
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btncalcular');
const pResult = document.getElementById('result');
const form = document.getElementById('form')

console.log(h1);

console.log(input1.value)

/*1-btn.addEventListener('evento que queremos escuchar', codigo que ejecuta);*/
// 2-btn.addEventListener('click', btnOnClick);

// function btnOnClick() {

//     V1 = parseInt(input2.value);
//     V2 = Number(input1.value);

//     const sumaVs = V1 + V2;
//     pResult.innerText = "Resultado: " + sumaVs;

// }


form.addEventListener('click', sumarInputValues)

function sumarInputValues(event) {

event.preventDefault();

alert('VIRUS!!')

}

h1.innerHTML = "Son cosas que pasan, dijo del aduanero";