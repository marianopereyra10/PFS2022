//Escriba un programa que calcule la probabilidad de sacar todos los dados 6
// siendo que tiramos N dados (N es un dato ingresado por el usuario)

import * as rls from "readline-sync";
let dados : number = rls.questionInt("Ingrese la cantidad de dados a tirar: ");
let probabilidad : number = (6**dados);

if(dados==0){
    probabilidad = 0
    console.log("Tirando: " + dados +
    " dados, no hay posibilidad de sacar ningun 6")
}
else if(dados>0){ 
    console.log("Tirando: " + dados + 
    " dados, la probabilidad de sacar todos los dados en 6, es de 1 en " + probabilidad)
}; 