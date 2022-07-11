// Escribir un algoritmo que nos pida una clave y verifique que sea la correcta.
// Tenga en cuenta que la clave es la palabra “eureka”.
// Solo tenemos 3 intentos para acertar, si fallamos los 3 intentos el sistema
// mostrará un mensaje indicándonos que hemos agotado todas las oportunidades.
// Si acertamos la clave, saldremos directamente del programa

import * as rls from "readline-sync";

let clave : string = "eureka";
let intentos : number = 0;

while(intentos < 3){   
    let claveIngresada : string = rls.question("Por favor ingrese su clave: ");
        if(claveIngresada==clave){
        break;
        }

        else  if(claveIngresada!=clave)
            console.log("Clave incorrecta")

        intentos+=1

        if (intentos == 3){
            console.log("Oportunidades agotadas")
        }
};