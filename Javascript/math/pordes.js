const inputValue = document.getElementById('itemPrice').innerHTML;
const inputDiscount = document.getElementById('cupon');
const btn = document.getElementById('botton');

btn.addEventListener('click', cuponDiscount);

const activePromotion = [];

activePromotion.push(
    {name:'SummerDIS', discountNum:15},
    {name:'XmasDIS', discountNum:30},
    {name:'NewYearDIS', discountNum:45}
);



function cuponDiscount() {
    for(let i = 0; i < activePromotion.length; i++){
        if(activePromotion[i].name === inputDiscount.value){

            const discount = activePromotion[i].discountNum;
            const price = inputValue

            finalPrice = (inputValue * (100 - discount)) / 100;
            result.innerText = finalPrice + "$"

            itemPrice.classList.add('inactive');
            return;
        }else{
            result.innerText = "Cupon no valido"
        }
    }
}



// function finalDiscount() {

//     const price = Number(inputValue.value);
//     const discount = Number(inputDiscount.value);

//     if(!price || !discount) {
//         result.innerText = "Debe llenar los campos!"
//         return;
//     };
//     if(discount > 100){
//         result.innerText = "El descuento no debe ser mayor a 100%"
//         return;
//     }
//         const finalPrice = (price * (100 - discount)) / 100;
//         result.innerText = "el precio del producto es: "+ price +"$ y con el descuento de: "+ discount +"% queda en: "+ finalPrice +"$"
// }



