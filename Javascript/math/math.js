console.group('%c Cuadrado', 'color: ForestGreen; font-size: 20px;')
const ladoCuadrado = 5;
const perimetroTotalCuadrado= ladoCuadrado * 4;
const areaTotalCuadrado = ladoCuadrado * ladoCuadrado; 

console.log({
    'Cuadrado equilatero con medida de lado de ' : ladoCuadrado + ' cm',
    'El perimetro total es ' : perimetroTotalCuadrado + ' cm',
    "Y el area total es ": areaTotalCuadrado + " cm^2"
});
console.groupEnd('cuadrado');

console.group('%c Triangulo', 'color: DarkOliveGreen; font-size: 20px;')
const ladoTrianguloUNO = 6;
const ladoTrianguloDOS = 6;
const ladoTrianguloBASE = 4;

const perimetroTotalTriangulo = ladoTrianguloUNO + ladoTrianguloDOS + ladoTrianguloBASE;


function calculadoraTrianguloArea(ladoUNO, base){
    const a = Math.pow(ladoUNO, 2);
    const b = Math.pow(base, 2) / 4;

    const hSinRaiz = (a - b);

    const h = Math.sqrt(hSinRaiz);

    const areaTotalTriangulo = (ladoTrianguloBASE * h / 2);
    return areaTotalTriangulo.toFixed(1);
}

// const a = Math.pow(ladoTrianguloUNO, 2);
// const b = Math.pow(ladoTrianguloBASE, 2) / 4;
// const hSinRaiz = (a - b);
// const h = Math.sqrt(hSinRaiz);
// const areaTotalTriangulo = (ladoTrianguloBASE * h / 2);

console.log({
    'El perimetro total del triangulo es' : perimetroTotalTriangulo + ' cm',
    'Y el area del triangulo es' : calculadoraTrianguloArea(6,4) + ' cm^2'
});

function TrianguloEscaleno(base, lado2, lado3){

    if(base == lado2 || base == lado3 || lado2 == lado3 ) {
        console.log("Para ser un triangulo Escaleno debe tener todos los lados distintos")
    }else{
        s = (base + lado2 + lado3) /2
        // ((12 * (12-6))*(12-8))*(12-10)
        h = ((2/base) * (Math.sqrt(((s * (s-base))*(s-lado2))*(s-lado3)))).toFixed(2);
        return alert("La altura del tiangulo es: " + parseInt(h));
    }   
};

console.groupEnd('triangulo');

console.group('%c Circulo', 'color: DarkOliveGreen; font-size: 20px;')

// const PI = 3.14159265359;

function radioDiametro(radio){
    const diametro = radio * 2;

    const circunferencia = diametro * Math.PI;
    const areaCirculo = (radio ** 2) * Math.PI;

    return console.log('la medida de la circunferecia es: '+circunferencia.toFixed(1)+' y el area del circulo es: '+areaCirculo.toFixed(1))
}

console.groupEnd('Circulo');