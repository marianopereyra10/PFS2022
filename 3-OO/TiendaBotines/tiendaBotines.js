"use strict";
exports.__esModule = true;
var errorControlado_1 = require("./errorControlado");
var TiendaBotines = /** @class */ (function () {
    function TiendaBotines(nombre) {
        try {
            if (nombre == "")
                throw new errorControlado_1["default"]('El nombre es obligatorio');
        }
        catch (error) {
            console.log("Ocurrio un ".concat(error.name, ": ").concat(error.message));
        }
        this.nombre = nombre;
        this.botines = [];
    }
    TiendaBotines.prototype.getNombre = function () {
        return this.nombre;
    };
    TiendaBotines.prototype.getBotines = function () {
        return this.botines;
    };
    //CRUD
    TiendaBotines.prototype.createBotines = function (botines) {
        if (botines) {
            this.botines.push(botines);
        }
    };
    TiendaBotines.prototype.findBotines = function (botin) {
        for (var i = 0; i < this.botines.length; i++) {
            if (this.botines[i] == botin) {
                return true;
            }
        }
        return false;
    };
    TiendaBotines.prototype.updateBotines = function (botin, posicion) {
        try {
            if (posicion < 0) {
                throw new errorControlado_1["default"]('La posicion no puede ser menor a 0');
            }
            else if (botin) {
                this.botines[posicion] = botin;
            }
        }
        catch (error) {
            console.log("Ocurrio un ".concat(error.name, ": ").concat(error.message));
        }
    };
    TiendaBotines.prototype.deleteBotines = function (posicion) {
        try {
            if (!this.botines[posicion]) {
                throw new errorControlado_1["default"]("No existen botines en la posicion ".concat(posicion));
            }
            else if (posicion < 0) {
                throw new errorControlado_1["default"]('La posicion no puede ser menor a 0');
            }
            else if (this.botines[posicion]) {
                this.botines.splice(posicion, 1);
            }
        }
        catch (error) {
            console.log("Ocurrio un ".concat(error.name, ": ").concat(error.message));
        }
    };
    TiendaBotines.prototype.findBotinesXTipo = function (tipo) {
        var botines = [];
        try {
            if (tipo == "")
                throw new errorControlado_1["default"]('La busqueda por tipo no puede estar vacía');
            this.botines.forEach(function (botin) {
                if (botin.getTipo() == tipo) {
                    botines.push(botin);
                }
            });
        }
        catch (error) {
            console.log("Ocurrio un ".concat(error.name, ": ").concat(error.message));
        }
        return botines;
    };
    TiendaBotines.prototype.findBotinesXMarca = function (marca) {
        var botines = [];
        try {
            if (marca == "")
                throw new errorControlado_1["default"]('La busqueda por marca no puede estar vacía');
            this.botines.forEach(function (botin) {
                if (botin.getMarca() == marca) {
                    botines.push(botin);
                }
            });
        }
        catch (error) {
            console.log("Ocurrio un ".concat(error.name, ": ").concat(error.message));
        }
        return botines;
    };
    TiendaBotines.prototype.findBotinesXTalle = function (talle) {
        var talles = ['38', '39', '40', '41', '42', '43', '44'];
        var botines = [];
        try {
            if (talles.indexOf(talle.toUpperCase()) == -1) {
                throw new errorControlado_1["default"]('El talle no se encuentra, los talles disponibles son: 38, 39, 40, 41, 42, 43, 44');
            }
            this.botines.forEach(function (botin) {
                if (botin.getTalle() == talle.toUpperCase()) {
                    botines.push(botin);
                }
            });
        }
        catch (error) {
            console.log("Ocurrio un ".concat(error.name, ": ").concat(error.message));
        }
        return botines;
    };
    TiendaBotines.prototype.imprimirBotines = function (botines) {
        var texto = "";
        botines.forEach(function (botin) {
            // console.log(botin);            
            texto += "tipo: ".concat(botin.getTipo(), ", marca: ").concat(botin.getMarca(), ", precio: ").concat(botin.getPrecio(), ", talle: ").concat(botin.getTalle(), "\n");
        });
        return texto;
    };
    return TiendaBotines;
}());
exports["default"] = TiendaBotines;
