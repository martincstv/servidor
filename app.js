/*
En un sistema en base cuatro, desde teclado ingresar dos cantidades y sumar dichas expreciones.
Las cantidades pueden contener digitos que sobrepasen las 30 cifras.
Por ejemplo:
 113223
+  1201
-------
 121030
*/
const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit",sumar);
function sumar(params) {
    params.preventDefault();
    
let cantidad1 = document.querySelector("#cant1").value;
let cantidad2 = document.querySelector("#cant2").value;
let myFunc = num => Number(num);
let intArray1 = Array.from(String(cantidad1), myFunc);
let intArray2 = Array.from(String(cantidad2),myFunc);
let arrayReverse1 = intArray1.reverse();
let arrayReverse2 = intArray2.reverse();
/* console.log(intArray1);
console.log(intArray2);
console.log(arrayReverse1);
console.log(arrayReverse2); */
let longitud1 = arrayReverse1.length;
let longitud2 = arrayReverse2.length;
/* console.log(longitud1);
console.log(longitud2); */
let mayorLongitud;
let menorLongitud;
if (longitud1 >= longitud2) {
    mayorLongitud = longitud1;
    menorLongitud = longitud2;
}else if(longitud2 >= longitud1){
    mayorLongitud = longitud2;
    menorLongitud = longitud1;
}
/* console.log(mayorLongitud); */
for (let i = 0; i < mayorLongitud - menorLongitud; i++) {
    if (arrayReverse1.length > arrayReverse2.length) {
        arrayReverse2.push(0);
    }else{
        arrayReverse1.push(0);
    }
}

/* console.log(arrayReverse1);
console.log(arrayReverse2); */
let arrayReverse3 = Array();
let base = 4;
let llevada = Array();
llevada.push(0);
let calculo = Array();
let residuo = Array();
for (let index = 0; index < mayorLongitud; index++) {
    let suma = arrayReverse1[index] + arrayReverse2[index];
    let valorPorLlevar = Math.trunc(suma / base);
  /*   if (condition) {
        
    } */
    llevada.push(Math.trunc(suma / base));
    calculo.push(Math.trunc(suma / base) * base);
    residuo.push(suma - (Math.trunc(suma / base) * base) );
}
/* console.log(llevada);
console.log(calculo);
console.log(residuo); */
//completar e igualar arrays
for (let i = 0; i < llevada.length - residuo.length; i++) {
residuo.push(0);
}

for (let j = 0; j < llevada.length; j++) {
    arrayReverse3[j] = llevada[j] + residuo[j];
}
let resultado = document.getElementById("resultado");
resultado.textContent = arrayReverse3.reverse();


}
