function metodo3(mat:number[][], x:number, y:number){
    let a:number, b:number;
    for(a=0; a<x; a++){
        for(b=0; b<y; b++){
            mat[a,b]=(a+1)*(b+1)
        }
    }
}
