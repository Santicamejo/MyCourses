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
  ]

const totales = orders.map(item => item.total)

// const addTax = orders.map(item => {
//     item.tax = .19;
//     return item //En este caso lo que va a suceder es que como estamos haciendo una referencia a memoria, tambien se va a modificar el arr original
// })

const addTaxNoRef = orders.map(item => {
    return {
        ...item,
        tax: .19
    }
})

console.log(orders);
console.log(totales);
// console.log(addTax);
console.log(addTaxNoRef);
