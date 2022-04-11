const precioOriginal = 100;
const descuento = 15;
const porcentajeConDescuento = 100-descuento;
const precioDescuento = precioOriginal*(porcentajeConDescuento/100);
console.log(precioDescuento);


function calcularPrecioDescuento(precio , descuento){
    const porcentajeConDescuento = 100-descuento;
    const precioDescuento = precio*(porcentajeConDescuento/100);
    return(precioDescuento);
}

function buttomPrice(){
    const descuento= 0 ;
    const inputPrice= document.getElementById("inputPrice");
    const inputDicount= document.getElementById("inputDiscount");
    console.log(inputPrice.value);
    console.log(inputDicount.value);
    const priceValue = inputPrice.value;
    const dicountValue = inputDicount.value;
    const cupones = [
        "hola",
        "miller", 
        "alejas",
    ];
    switch(dicountValue){
        case cupones[0]:
            descuento = 15;
        break;
        case cupones[1]:
            descuento= 30;
        break;
        case cupones[2]:
            descuento = 25;
        break;
    }
    const precioConDescuentp = calcularPrecioDescuento(priceValue, descuento);
    // const parrafo = document.getElementById("priceP");
    // parrafo.innerText = ("El descuento tal es"+ precioConDescuentp);
    alert("El descuento tal es"+ precioConDescuentp)
}


