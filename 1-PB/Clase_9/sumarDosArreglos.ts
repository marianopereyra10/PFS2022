import * as rls from 'readline-sync';

let dimensionArreglo : number = rls.questionInt("Ingrese la dimension del arreglo: ");
let v1 : number [] = new Array (dimensionArreglo);
let v2 : number [] = new Array (dimensionArreglo);
let vSuma : number [] = new Array (dimensionArreglo);

function cargarArreglo(v:number []){
    for (let i = 0; i < v.length; i++) {
    const element = v[i];
       v[i] = aleatorio (15, 20);
    }
}

function aleatorio(minimo: number, maximo: number ): number {
    return Math.floor((Math.random() * (maximo-minimo)) + minimo); 
}

function sumarArreglos (v1 : number [], v2 : number [], vSuma : number []) {
    for (let i = 0; i < v1.length; i++) {
    vSuma [i] = v1 [i] + v2 [i];
    }
}
cargarArreglo (v1);
cargarArreglo (v2);
sumarArreglos (v1, v2, vSuma);

console.log(`Los arreglos son: ${v1},  ${v2} y su suma es igual a: ${vSuma}`);
