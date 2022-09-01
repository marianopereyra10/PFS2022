import TiendaBotines from "./tiendaBotines";
import BotinesFutbol from "./botinesFutbol";

import * as rls from 'readline-sync';


let misBotines: TiendaBotines = new TiendaBotines(rls.question('Ingrese nombre de la Tienda: '));
let opcion: string = rls.question('Ingrese una opcion: C - R - U - D . Presione F para finalizar: ').toUpperCase();
while (opcion != 'F') {
    switch (opcion) {
        case 'C': {
            let datosBotin: string = rls.question('Ingrese en este orden: tipo, tipoSuela, talle, marca, precio: ');
            let botin: string[] = datosBotin.split(',');
            misBotines.createBotines(new BotinesFutbol(botin[0], botin[1], botin[2], botin[3], parseInt(botin[4])));
            break;
        }
        case 'R': {
            let opcion2: string = rls.question('Presione "M" si quiere buscar por Marca; "T" si busca por talle: ').toUpperCase();
            switch (opcion2) {
                case 'M': {
                    let botinM: string = rls.question('Ingrese tipo de botin a buscar: ');
                    let isBotinM: BotinesFutbol[] = misBotines.findBotinesXMarca(botinM);
                    if (isBotinM.length > 0) {                          
                        console.log(`Se encontró el botin de marca ${botinM} con estas características: ${misBotines.imprimirBotines(isBotinM)}`);
                    } else {
                        console.log(`No se encontró el botin de marca: ${botinM}`);
                    }
                    break;     
                }
                case 'T': {
                    let botinT: string = rls.question('Ingrese talle de botin a buscar: ');
                    let isBotinT: BotinesFutbol[] = misBotines.findBotinesXTalle(botinT);
                    if (isBotinT) {
                        console.log(`Botin encontrado en talle ${botinT}: ${misBotines.imprimirBotines(isBotinT)}`);
                    } else {
                        console.log(`No se encontró ningun botin en talle: ${botinT}`);
                    }
                    break;
                }
            }
            break;
        }
        case 'U': {
            let posBotin: number = rls.question('Ingrese posición del botin a actualizar: ');
            let datosBotin: string = rls.question('Ingrese: tipo, tipoSuela, talle, marca, precio de la prenda a modificar: ');
            let botin: string[] = datosBotin.split(',');
            misBotines.updateBotines(new BotinesFutbol(botin[0], botin[1], botin[2], botin[3], parseInt(botin[4])), posBotin);
            break;
        }
        case 'D': {
            let posBotin: number = rls.question('Ingrese posicion del botin a eliminar: ');
            misBotines.deleteBotines(posBotin);
            console.log(`El botin en la posicion ${posBotin} fue eliminado`);
            break;
        }
    }
    console.log(misBotines);
    opcion = rls.question('Ingrese una opcion: C - R - U - D . Presione F para finalizar: ').toUpperCase();
}