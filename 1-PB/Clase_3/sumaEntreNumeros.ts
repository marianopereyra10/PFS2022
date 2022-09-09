// Escriba un programa que pida al usuario dos numeros enteros,
// y luego retome la suma de todos los numeros que estan entre ellos.

import * as rls from "readline-sync";

let suma : number;
let numeroUno : number = rls.questionInt("Ingrese el primer numero: ");
let numeroDos : number = rls.questionInt("Ingrese el segundo numero: ");
suma = 0;

if(numeroUno<numeroDos) {
    for (numeroUno; numeroUno <= numeroDos; numeroUno++) {
        suma = suma+numeroUno
    }
}
else if(numeroDos<numeroUno) { 
    for (numeroDos; numeroDos <= numeroUno; numeroDos++) {
        suma = suma+numeroDos
    }
};
        console.log ("La suma de los numeros es: ", suma);