
//Cuadrado
console.group("Cuadrado")
// const ladoCuadrado = 5;
// console.log("lados del cuadrado miden: " + ladoCuadrado  + "cm"  )

function perimetroCuadrado (lado){

    return lado*4;
}

// console.log("El perimetro del cuadrado es: " + perimetro + "cm" )

function areaCuadrado (lado){
  return lado* lado;  
} 
// console.log("Area del cuadrado: " + area  + "cm2"  )
console.groupEnd();

// triangulo
console.group('Triangulos');



function perimetrotRIANGULO (ladoTriangulo1 ,ladoTriangulo2 , baseTriangulo3) {
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo3;
}

// console.log("El perimetro del triangulo es: " + perimetrotRIANGULO + "cm" )

function areaTriangulo ( baseTriangulo3 , alturaTriangulo) {
    return baseTriangulo3*alturaTriangulo/2;
}
// console.log("Area del Triangulo: " + areaTriangulo  + "cm2"  )
console.groupEnd(); 

// circulo
console.group("circulos");
const pi= 3.1416;
const radio = 4;
const perimetroCirculo= 2*pi*radio;
console.log("Perimetro del criculo es: " + perimetroCirculo + "cm");
const areaCirculo = pi* radio * radio;
console.log("Area del circulo: " + areaCirculo + "cm2")
console.groupEnd();

// funciones con Ht¿TML

function calcularPerimetroCuandrado(){
    const input = document.getElementById("inputCuadrado");
    const lado = input.value;
    const perimetro = perimetroCuadrado(lado);
    alert(perimetro)

}

function calcularAreaCuadrado(){
    const input = document.getElementById("inputCuadrado");
    const lado = input.value;
    const area = areaCuadrado(lado);
    alert(area + "m");
}

// triangulo isoceles
function trianguloiso(lado1 , lado2 , base){
    if (lado1 == lado2 && lado1 != base){
        const altura = Math.sqrt((lado1*lado1)-(base*base/4));
        return(altura);
    }
    else{
        console.log("No estanbien los datos")
    }
}
