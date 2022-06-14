import*as rls from 'readline-sync'
let dimension: number= rls.questionInt("Ingrese la dimension de los vectores:");
let v1 : number[] = new Array(dimension);
let v2 : number[] = new Array(dimension);
let productov: number;
function cargarVector(v: number[],dimension:number){
    let i :number;
    for(i = 0; i < dimension;i++ ){
    v[i]= rls.questionInt(`Introdusca el valor en la dimension[ ${i} ]:`)
}
}
function multiplicarVectores(v1: number[],v2: number [], productov: number, dimension:number){
productov =0
    let i: number;
    for(i = 0; i < dimension; i++){
        productov += v1[i] * v2[i];
        
    }
}
​
cargarVector(v1,dimension);
cargarVector(v2,dimension);
multiplicarVectores (v1, v2, productov, dimension);
console.log (`Los vectores son: ${v1},   ${v2} y su producto escalar es igual a: ${productov}`);