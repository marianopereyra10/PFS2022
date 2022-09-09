function metodo1(arr:number[], x:number=2, y:number=3){
    let ax:number;
    ax=arr[x];
    arr[x]=arr[y];
    arr[y]=ax;
}
console.log(metodo1)