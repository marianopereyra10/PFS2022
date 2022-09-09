import * as rls from "readline-sync";

let llegadaColectivo : string;
console.log("Esperando el colectivo");
llegadaColectivo = rls.question("Llegó el colectivo? (S/N): ");
while (llegadaColectivo=="N") {
    console.log("Esperando el colectivo");
    llegadaColectivo = rls.question("Llegó el colectivo? (S/N): ");
}
console.log("Llegó el colectivo");