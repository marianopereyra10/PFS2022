import * as rls from 'readline-sync';
let frase : string = rls.question("Ingrese una frase: ");
let cuentaLetras : number[] = new Array(26);
let letras : string = "abcdefghijklmnopqrstuvwxyz";

contarLetras(frase, cuentaLetras, letras)

console.log(`La frase : ${frase} tiene ${listarCuenta(cuentaLetras, letras)}`);

function contarLetras(texto: string, cantidades: number[], letras: string) {
	for (let index = 0; index < texto.length; index++) {
		const element = array[index];
		
	}
	
	//contar cuantas veces esta cada letra
}
function listarCuenta(cantidades: number[], letras: string) : string {
	//mostrar cuantas veces esta cada letra
	let cuantasVecesCadaLetra: string;
	return cuantasVecesCadaLetra;
}