function metodo2(v:number[], s:number){
    let i:number, d:number;
    i=0;
    d=s-1;
    while(i<d){
        metodo1(v, i, d);
        i=i+1;
        d=d-1;
    }
}