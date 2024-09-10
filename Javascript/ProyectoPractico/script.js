const h1 = document.querySelector('h1')
const p = document.querySelector('p')
const parrafito = document.querySelector('.parrafito')
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

console.log(input.value)


h1.innerHTML = "Cosas que pasan, dijo del aduanero";

const img = document.createElement('img');
img.setAttribute('src', './foto.png')
console.log(img);

pid.innerHTML = "";
pid.append(img);