import * as readlineSync from "readline-sync";
let nroDeseado : number = readlineSync.questionInt("Escriba el numero que desea verificar si es mayor o no a 1000: ");
if (nroDeseado > 1000) { 
    console.log("El número es mayor a 1000: " +  nroDeseado + " Aplicar descuento del 10%");
} else {
    console.log("El número es menor o igual a 1000: " +  nroDeseado + " La compra no tiene descuento"); 
}