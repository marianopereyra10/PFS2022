import * as rls from "readline-sync";

let numDeseado : number [] = new Array (5);

numDeseado [0]= rls.questionInt("Ingrese un numero: ");
numDeseado [1]= rls.questionInt("Ingrese un numero: ");
numDeseado [2]= rls.questionInt("Ingrese un numero: ");
numDeseado [3]= rls.questionInt("Ingrese un numero: ");
numDeseado [4]= rls.questionInt("Ingrese un numero: ");

console.log ("Los valores son: "+ numDeseado);