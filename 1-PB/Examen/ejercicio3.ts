//Algoritmo secreto
import * as rls from 'readline-sync';

let elemento, numero : number;
elemento = rls.questionInt("Ingrese tamaño: ");
let arr[] = new Array[elemento];
cargar(arr);
numero = rls.questionInt("Ingrese numero: ");
function ocu(arr,numero);
console.log(`El numero ${numero} ... ${ocu}`);
mostrar(arr, elemento)
function cargar(v) {
    for (let i = 0; i < v.length; i++)
            v[i]=Math.floor(Math.random()*100);
}
function mostrar(v,n) {
    let c="";
    for (let i = 0; i < v.length; i++)
            c+= v[i] + " ";
    console.log(c);
}
function funcion(v,n) {
    let o=0;
    for (let i = 0; i < v.length; i++)
            if (v[i] == n)
                    o+=1;
}











