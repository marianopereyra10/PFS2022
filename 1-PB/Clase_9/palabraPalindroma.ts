import*as rls from 'readline-sync';

let palabra : string = rls.question("ingrese una palabra");

function esPalidroma(palabra: string): boolean {
    for (let i = 0; i < palabra.length / 2; i++) {
        if (palabra[i] !== palabra[palabra.length - 1 - i]) {
            return false;
        }
    } return true;
}
