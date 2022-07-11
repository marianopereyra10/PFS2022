let numAleatorios : number[] = new Array(10);
let i : number;

function azar() : number {
    return Math.random()*100
};

for (i=0 ; i<10; i++) {
    numAleatorios[i] = azar();
    console.log(numAleatorios[i])
};