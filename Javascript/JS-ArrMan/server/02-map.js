const productsEx = ['cow', 'chiken', 'crab']

const processedEx = products.map(i => i + '++')

console.log(products);
console.log(processed);

const products = ['cow', 'chiken', '&#129408;']

const processed = products.map(i =>{
    if (i === 'cow') {
        return 'Hamburger'
    }else if(i === 'chiken'){
        return 'Chiken wings'
    }else if(i === 'crab'){
        return 'Sea Food'
    }
})

console.log(products);
console.log(processed);

