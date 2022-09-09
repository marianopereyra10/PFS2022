import * as rls from 'readline-sync';

let num:number=rls.questionInt("Ingrese un numero: ");

if(num==0){
    console.log("El " + num + "no es par ni impar");
}else if(num%2==0){
    console.log("El " + num + "es par");
}else{
    console.log("El " + num + "es impar");
}