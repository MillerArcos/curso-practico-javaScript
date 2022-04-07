const precioOriginal = 100;
const descuento = 15;
const porcentajeConDescuento = 100-descuento;
const precioDescuento = precioOriginal*(porcentajeConDescuento/100)
console.log(precioDescuento);


function calcularPrecioDescuento(precio , descuento){
    const porcentajeConDescuento = 100-descuento;
    const precioDescuento = precio*(porcentajeConDescuento/100)
    return(precioDescuento);
}

function buttomPrice(){
    const inputPrice= document.getElementById("inputPrice");
    const inputDicount= document.getElementById("inputDiscount");
    const priceValue = inputPrice.value;
    const dicountValue = inputDicount.value;
    const precioConDescuentp = calcularPrecioDescuento(priceValue, dicountValue);
    const parrafo = document.getElementById("priceP");
    parrafo.innerText = ("El descuento tal es"+ precioConDescuentp);
}