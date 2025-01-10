"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.adicionarProduto = adicionarProduto;
exports.removerProduto = removerProduto;
exports.mostrarInventario = mostrarInventario;
exports.calculaTotal = calculaTotal;
exports.pesarTotal = pesarTotal;
exports.calcularVmedio = calcularVmedio;
exports.pesarMedia = pesarMedia;
exports.qtdeTotal = qtdeTotal;
exports.qtdeProds = qtdeProds;
const serviceEstoque_1 = require("../services/serviceEstoque");
const service = new serviceEstoque_1.estoqueService();
function adicionarProduto(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield service.criar(data);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function removerProduto(data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield service.remover(data);
        }
        catch (error) {
            console.log(error);
        }
    });
}
function mostrarInventario() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield service.mostrar();
        }
        catch (error) {
            console.log(error);
        }
    });
}
function calculaTotal() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield service.valorTotal();
        }
        catch (error) {
            console.log(error);
        }
    });
}
function pesarTotal() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield service.pesoTotal();
        }
        catch (error) {
            console.log(error);
        }
    });
}
function calcularVmedio() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield service.valorMedio();
        }
        catch (error) {
            console.log(error);
        }
    });
}
function pesarMedia() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield service.pesoMedio();
        }
        catch (error) {
            console.log(error);
        }
    });
}
function qtdeTotal() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield service.qtdeTotal();
        }
        catch (error) {
            console.log(error);
        }
    });
}
function qtdeProds() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield service.qtdeProds();
        }
        catch (error) {
            console.log(error);
        }
    });
}
