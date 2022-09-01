"use strict";
exports.__esModule = true;
var errorControlado_1 = require("./errorControlado");
var BotinesFutbol = /** @class */ (function () {
    function BotinesFutbol(tipo, tipoSuela, talle, marca, precio) {
        try {
            if (tipo.trim() == "")
                throw new errorControlado_1["default"]('El tipo no puede estar vacío');
            this.tipo = tipo;
            if (tipoSuela.trim() == "")
                throw new errorControlado_1["default"]('El tipoSuela no puede estar vacío');
            this.tipoSuela = tipoSuela;
            var talles = ['38', '39', '40', '41', '42', '43', '44'];
            if (talles.indexOf(talle.toUpperCase().trim()) == -1)
                throw new errorControlado_1["default"]('El talle no existe, seleccione talle valido: 38, 39, 40, 41, 42, 43 o 44');
            this.talle = talle.toUpperCase().trim();
            if (marca.trim() == "")
                throw new errorControlado_1["default"]('La marca no puede estar vacía');
            this.marca = marca;
            if (precio < 0)
                throw new errorControlado_1["default"]('El precio no puede ser menor a 0');
            this.precio = precio;
        }
        catch (error) {
            console.log("Ocurrio un ".concat(error.name, ": ").concat(error.message));
        }
    }
    BotinesFutbol.prototype.getTipo = function () {
        return this.tipo;
    };
    BotinesFutbol.prototype.setTipo = function (tipo) {
        try {
            if (tipo == "")
                throw new errorControlado_1["default"]('El tipo no puede estar vacío');
        }
        catch (error) {
            console.log("Ocurrio un ".concat(error.name, ": ").concat(error.message));
        }
        this.tipo = tipo;
    };
    BotinesFutbol.prototype.getTipoSuela = function () {
        return this.tipoSuela;
    };
    BotinesFutbol.prototype.setTipoSuela = function (tipoSuela) {
        try {
            if (tipoSuela == "")
                throw new errorControlado_1["default"]('El tipoSuela no puede estar vacío');
        }
        catch (error) {
            console.log("Ocurrio un ".concat(error.name, ": ").concat(error.message));
        }
        this.tipoSuela = tipoSuela;
    };
    BotinesFutbol.prototype.getTalle = function () {
        return this.talle;
    };
    BotinesFutbol.prototype.getMarca = function () {
        return this.marca;
    };
    BotinesFutbol.prototype.setMarca = function (marca) {
        try {
            if (marca == "")
                throw new errorControlado_1["default"]('La marca no puede estar vacía');
        }
        catch (error) {
            console.log("Ocurrio un ".concat(error.name, ": ").concat(error.message));
        }
        this.marca = marca;
    };
    BotinesFutbol.prototype.getPrecio = function () {
        return this.precio;
    };
    BotinesFutbol.prototype.setPrecio = function (precio) {
        try {
            if (isNaN(precio))
                throw new errorControlado_1["default"]('');
            if (precio < 0)
                throw new errorControlado_1["default"]('El precio no puede ser menor a 0');
        }
        catch (error) {
            console.log("Ocurrio un ".concat(error.name, ": ").concat(error.message));
        }
        this.precio = precio;
    };
    return BotinesFutbol;
}());
exports["default"] = BotinesFutbol;
