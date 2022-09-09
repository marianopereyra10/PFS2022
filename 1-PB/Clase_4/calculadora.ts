import * as rls from 'readline-sync';

function dibujar(numero: number, simbolo: number) {
    let linea : string = simbolo.toString();
    for (i = 0; i <= numero; i++) {
        linea = linea + simbolo;
    };
    console.log(linea);
}

let i : number, linea : string;
let numero1 : number = rls.questionInt("Ingrese un número: "); ;
let numero2 : number = rls.questionInt("Ingrese un número: "); ;
let opcionMenu : number = rls.questionInt("Ingrese 1 para sumar, 2 para restar, cualquier 