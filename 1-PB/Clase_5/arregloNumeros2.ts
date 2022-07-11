import * as rls from "readline-sync";

let num :  number [] = new Array (5);
num [0]= rls.questionInt("Ingrese un numero: ");
num [1]= rls.questionInt("Ingrese un numero: ");
num [2]= rls.questionInt("Ingrese un numero: ");
num [3]= rls.questionInt("Ingrese un numero: ");
num [4]= rls.questionInt("Ingrese un numero: ");

console.log ("Los valores son: "+ num);