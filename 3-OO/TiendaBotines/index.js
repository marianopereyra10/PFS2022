"use strict";
exports.__esModule = true;
var tiendaBotines_1 = require("./tiendaBotines");
var botinesFutbol_1 = require("./botinesFutbol");
var rls = require("readline-sync");
var misBotines = new tiendaBotines_1["default"](rls.question('Ingrese nombre de la Tienda: '));
var opcion = rls.question('Ingrese una opcion: C - R - U - D . Presione F para finalizar: ').toUpperCase();
while (opcion != 'F') {
    switch (opcion) {
        case 'C': {
            var datosBotin = rls.question('Ingrese en este orden: tipo, tipoSuela, talle, marca, precio: ');
            var botin = datosBotin.split(',');
            misBotines.createBotines(new botinesFutbol_1["default"](botin[0], botin[1], botin[2], botin[3], parseInt(botin[4])));
            break;
        }
        case 'R': {
            var opcion2 = rls.question('Presione "M" si quiere buscar por Marca; "T" si busca por talle: ').toUpperCase();
            switch (opcion2) {
                case 'M': {
                    var botinM = rls.question('Ingrese tipo de botin a buscar: ');
                    var isBotinM = misBotines.findBotinesXMarca(botinM);
                    if (isBotinM.length > 0) {
                        console.log("Se encontr\u00F3 el botin de marca ".concat(botinM, " con estas caracter\u00EDsticas: ").concat(misBotines.imprimirBotines(isBotinM)));
                    }
                    else {
                        console.log("No se encontr\u00F3 el botin de marca: ".concat(botinM));
                    }
                    break;
                }
                case 'T': {
                    var botinT = rls.question('Ingrese talle de botin a buscar: ');
                    var isBotinT = misBotines.findBotinesXTalle(botinT);
                    if (isBotinT) {
                        console.log("Botin encontrado en talle ".concat(botinT, ": ").concat(misBotines.imprimirBotines(isBotinT)));
                    }
                    else {
                        console.log("No se encontr\u00F3 ningun botin en talle: ".concat(botinT));
                    }
                    break;
                }
            }
            break;
        }
        case 'U': {
            var posBotin = rls.question('Ingrese posición del botin a actualizar: ');
            var datosBotin = rls.question('Ingrese: tipo, tipoSuela, talle, marca, precio de la prenda a modificar: ');
            var botin = datosBotin.split(',');
            misBotines.updateBotines(new botinesFutbol_1["default"](botin[0], botin[1], botin[2], botin[3], parseInt(botin[4])), posBotin);
            break;
        }
        case 'D': {
            var posBotin = rls.question('Ingrese posicion del botin a eliminar: ');
            misBotines.deleteBotines(posBotin);
            console.log("El botin en la posicion ".concat(posBotin, " fue eliminado"));
            break;
        }
    }
    console.log(misBotines);
    opcion = rls.question('Ingrese una opcion: C - R - U - D . Presione F para finalizar: ').toUpperCase();
}
