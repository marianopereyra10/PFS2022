// Realice un programa que devuelva la potencia de un número.
// La base y el exponente deben ser ingresados por teclado.
// Sólo deben admitirse exponentes mayores o iguales a cero.
// Recuerde que el resultado de un numero elevado a 0 es 1.
// Separe la lógica de calcular la potencia utilizando métodos.

import * as rls from "readline-sync";

let base : number = rls.questionInt("Ingrese la base del numero que quiere calcular: ");
let exponente : number = rls.questionInt("Ingrese el exponente del numero que quiere calcular: ");
let r = base;
let i : number

if(exponente==0){
    console.log("El resultado es = 1")
}
else for(i = 1; i<=exponente; i++){
    r = r * base;
}

console.log(r);

