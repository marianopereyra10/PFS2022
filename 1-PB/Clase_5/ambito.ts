let mensaje:string = "Hola Mundo!!";

ambitoVariables();
console.log(mensaje);

function ambitoVariables() {
    let mensaje:string,
    mensaje = "Hola Argentina!!";
    console.log(mensaje);
    mensaje = leeVariable(mensaje);
    console.log(mensaje);
    
}