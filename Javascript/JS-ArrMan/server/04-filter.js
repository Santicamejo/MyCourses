const words = ["Verde", "Rojo", "Azul", "Violeta"];

const newArr = []; //Solucion con ciclo for y condicional if
for (let i = 0; i < words.length; i++) {
  const item = words[i];
  if (item.length >= 5) {
    newArr.push(item);
  }
}

const res = words.filter((i) => i.length >= 5); //Solcion con filter

console.log(newArr);
console.log(res);

//Ejercicio
//Mostrar todas las ordenes no entregadas

const orders = [
  {
    customerName: "Nicolas",
    total: 60,
    delivered: true,
  },
  {
    customerName: "Zulema",
    total: 120,
    delivered: false,
  },
  {
    customerName: "Santiago",
    total: 180,
    delivered: true,
  },
  {
    customerName: "Valentina",
    total: 240,
    delivered: true,
  },
];

const noDelivered = orders.filter((i) => i.delivered === false);
console.log(noDelivered);

const delivered = orders.filter(i => i.delivered == true && i.total >1)
console.log(delivered);
