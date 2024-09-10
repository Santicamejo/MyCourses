const h1 = document.querySelector('h1')
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btncalcular');
const pResult = document.getElementById('result');

console.log(h1);

console.log(input1.value)

function btnOnClick() {

    V1 = parseInt(input2.value);
    V2 = Number(input1.value);

    const sumaVs = V1 + V2;
    pResult.innerText = "Resultado: " + sumaVs;

}

/*Con la funcion parseInt() podemos transformar los Stings capturados(.value)
Con la funcion Number() podemos transformar los Stings capturados(.value)*/


h1.innerHTML = "Son cosas que pasan, dijo del aduanero";