import ErrorControlado from "./errorControlado";

export default class BotinesFutbol {
    private tipo: string; //profesional, amateur
    private tipoSuela: string; // cesped, cambiables, sintetico, futsal
    private talle: string;
    private marca: string;
    private precio: number;
    

    constructor(tipo: string, tipoSuela: string, talle: string, marca: string, precio: number) {
        try {            
            if (tipo.trim() == "") throw new ErrorControlado('El tipo no puede estar vacío');
            this.tipo = tipo;
            if (tipoSuela.trim() == "") throw new ErrorControlado('El tipoSuela no puede estar vacío');
            this.tipoSuela = tipoSuela;
            let talles: string[] = ['38', '39', '40', '41', '42', '43', '44'];                                                                   
            if (talles.indexOf(talle.toUpperCase().trim()) == -1) 
                throw new ErrorControlado('El talle no existe, seleccione talle valido: 38, 39, 40, 41, 42, 43 o 44');
            this.talle = talle.toUpperCase().trim();    
            if (marca.trim() == "") throw new ErrorControlado('La marca no puede estar vacía');
            this.marca = marca;
            if (precio < 0) throw new ErrorControlado('El precio no puede ser menor a 0');
              this.precio = precio;
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);
        }
    }
      
    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        try {            
            if (tipo == "") throw new ErrorControlado('El tipo no puede estar vacío');
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);            
        }
        this.tipo = tipo;
    }

    public getTipoSuela(): string {
        return this.tipoSuela;
    }

    public setTipoSuela(tipoSuela: string): void {
        try {            
            if (tipoSuela == "") throw new ErrorControlado('El tipoSuela no puede estar vacío');
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);            
        }
        this.tipoSuela = tipoSuela;
    }

    public getTalle(): string {
        return this.talle;
    }

    public getMarca(): string {
        return this.marca;
    }

    public setMarca(marca: string): void {
        try {            
            if (marca == "") throw new ErrorControlado('La marca no puede estar vacía');
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);            
        }
            this.marca = marca;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number) {
        try {   
            if (isNaN(precio)) throw new ErrorControlado('');      
            if (precio < 0) throw new ErrorControlado('El precio no puede ser menor a 0');
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);            
        }
        this.precio = precio;
    }

    

}