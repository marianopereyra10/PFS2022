import * as rls from "readline-sync";
  
let sueldoActual : number = rls.questionFloat("Ingrese el sueldo del empleado: $");
let sueldoConAumento : number;

if (sueldoActual <= 15000){
    sueldoConAumento = sueldoActual + sueldoActual*0.2;
    console.log("Sueldo actualizado: $" + sueldoConAumento);
} else if (sueldoActual > 15000 && sueldoActual <= 20000) {
    sueldoConAumento = sueldoActual + sueldoActual*0.1;
    console.log("Sueldo actualizado: $" + sueldoConAumento);
} else if (sueldoActual > 20000 && sueldoActual <= 25000) {
    sueldoConAumento = sueldoActual + sueldoActual*0.05;
    console.log("Sueldo actualizado: $" + sueldoConAumento);
} else if (sueldoActual > 25000) {sueldoConAumento = sueldoActual;
    console.log("Sueldo actualizado: $" + sueldoConAumento);
}