import ErrorControlado from "./errorControlado";
import BotinesFutbol from "./botinesFutbol";

export default class TiendaBotines {
    private nombre: string;
    private botines: BotinesFutbol[];

    constructor(nombre: string) {
        try {
            if (nombre == "") throw new ErrorControlado('El nombre es obligatorio');
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);
        }
        this.nombre = nombre;
        this.botines = [];
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getBotines(): BotinesFutbol[] {
        return this.botines;
    }

    //CRUD

    public createBotines(botines: BotinesFutbol): void {
        if (botines) {
            this.botines.push(botines);
        }
    }

    public findBotines(botin: BotinesFutbol): boolean {
        for (let i = 0; i < this.botines.length; i++) {
            if (this.botines[i] == botin) {
                return true;
            }
        }
        return false;
    }

    public updateBotines(botin: BotinesFutbol, posicion: number): void {
        try {
            if (posicion < 0) {
                throw new ErrorControlado('La posicion no puede ser menor a 0');
            } else if (botin) {
                this.botines[posicion] = botin;
            }             
        }
        catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);
        }
    }

    public deleteBotines(posicion: number): void {
        try {            
            if (!this.botines[posicion]) {
                throw new ErrorControlado(`No existen botines en la posicion ${posicion}`);
            } else if (posicion < 0) {
                throw new ErrorControlado('La posicion no puede ser menor a 0');
            } else if (this.botines[posicion]) {
                this.botines.splice(posicion, 1);
            }
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);            
        }
    }

    public findBotinesXTipo(tipo: string): BotinesFutbol[] {
        let botines: BotinesFutbol[] = [];
        try {            
            if (tipo == "") throw new ErrorControlado('La busqueda por tipo no puede estar vacía');
            this.botines.forEach(botin => {
                if (botin.getTipo() == tipo) {
                    botines.push(botin)
                }
            })
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);            
        }
        return botines;
    }       

    public findBotinesXMarca(marca: string): BotinesFutbol[] {
        let botines: BotinesFutbol[] = [];
        try {            
            if (marca == "") throw new ErrorControlado('La busqueda por marca no puede estar vacía');
            this.botines.forEach(botin => {
                if (botin.getMarca() == marca) {
                    botines.push(botin)
                }
            })
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);            
        }
        return botines;
    }       

    public findBotinesXTalle(talle: string): BotinesFutbol[] {
        let talles: string[] = ['38', '39', '40', '41', '42', '43', '44'];
        let botines: BotinesFutbol[] = [];
        try {            
            if (talles.indexOf(talle.toUpperCase()) == -1) {
                throw new ErrorControlado('El talle no se encuentra, los talles disponibles son: 38, 39, 40, 41, 42, 43, 44');
            }
            
            this.botines.forEach(botin => {
                if (botin.getTalle() == talle.toUpperCase()) {
                    botines.push(botin);
                }
            })
        } catch (error) {
            console.log(`Ocurrio un ${error.name}: ${error.message}`);            
        }
        return botines;
    }

   
    public imprimirBotines(botines: BotinesFutbol[]): string {
        let texto: string = "";
        botines.forEach(botin => {
            // console.log(botin);            
            texto += `tipo: ${botin.getTipo()}, marca: ${botin.getMarca()}, precio: ${botin.getPrecio()}, talle: ${botin.getTalle()}\n`;
        })
        return texto;
    }
}
