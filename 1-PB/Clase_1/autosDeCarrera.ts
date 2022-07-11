import * as readlineSync from "readline-sync";
let vuelta1 : number = readlineSync.questionFloat("Ingrese tiempo vuelta 1");
let vuelta2 : number = readlineSync.questionFloat("Ingrese tiempo vuelta 2");
let vuelta3 : number = readlineSync.questionFloat("Ingrese tiempo vuelta 3");
let vuelta4 : number = readlineSync.questionFloat("Ingrese tiempo vuelta 4");
let tiempoTotal : number = vuelta1+vuelta2+vuelta3+vuelta4;
let promedioDeVuelta : number = tiempoTotal/4;
console.log ("Tiempo total", tiempoTotal);
console.log ("Promedio de vuelta", promedioDeVuelta);
