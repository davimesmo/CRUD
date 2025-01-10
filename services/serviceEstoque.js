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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.estoqueService = void 0;
const readCSV_1 = require("../models/readCSV");
const writeCSV_1 = require("../models/writeCSV");
const fs_1 = __importDefault(require("fs"));
const receba = require('prompt-sync')({ sigint: true });
const filePath = "./models/estoque.csv";
class estoqueService {
    constructor() {
        this.valorTotalEstoque = 0;
        this.pesoTotalEstoque = 0;
    }
    criar(data) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!fs_1.default.existsSync(filePath)) {
                var Vazio = [];
                yield (0, writeCSV_1.writeCSV)(filePath, Vazio);
            }
            var produtos = yield (0, readCSV_1.readCSV)(filePath);
            var produtoExistente = false;
            if (typeof data.nome != "string" || isNaN(data.peso) || isNaN(data.quantidade) || isNaN(data.valor)) {
                throw new Error("ERROU!");
            }
            else {
                for (var i of produtos) {
                    if (i.nome == data.nome) {
                        produtoExistente = true;
                        break;
                    }
                }
                if (produtoExistente) {
                    throw new Error("ERROU!");
                }
                else {
                    var produtosAtualizado = [...produtos, data];
                    yield (0, writeCSV_1.writeCSV)(filePath, produtosAtualizado);
                    console.log("\n\nProduto adicionado com sucesso!\n\n");
                }
            }
        });
    }
    remover(data) {
        return __awaiter(this, void 0, void 0, function* () {
            var produtos = yield (0, readCSV_1.readCSV)(filePath);
            var paraRemover = produtos.find(produto => produto.nome === data.nome);
            if (!paraRemover) {
                throw new Error("ERROU!");
            }
            else {
                console.log("Produto a ser removido:");
                console.log(`Nome: ${paraRemover.nome}`);
                console.log(`Valor: ${paraRemover.valor}`);
                console.log(`Peso: ${paraRemover.peso}`);
                console.log(`Quantidade: ${paraRemover.quantidade}`);
                const confirmacao = receba("\n\nVocê tem certeza que deseja remover o produto? (s/n): \n\n");
                if (confirmacao != 's') {
                    console.log("\n\nRemoção Cancelada\n\n");
                    return;
                }
                else {
                    var removido = (produtos).filter((produtos) => produtos.nome != data.nome);
                    yield (0, writeCSV_1.writeCSV)(filePath, removido);
                    console.log("\n\nRemoção concluída\n\n");
                }
            }
        });
    }
    mostrar() {
        return __awaiter(this, void 0, void 0, function* () {
            var produtos = yield (0, readCSV_1.readCSV)(filePath);
            console.log("\n");
            for (var i of produtos) {
                console.log(`Nome: ${i.nome} Peso: ${i.peso} Valor: ${i.valor} Quantidade: ${i.quantidade}`);
            }
            console.log("\n");
        });
    }
    valorTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            var produtos = yield (0, readCSV_1.readCSV)(filePath);
            for (var i of produtos) {
                this.valorTotalEstoque += parseFloat(i.valor.toString()) * parseInt(i.quantidade.toString());
            }
            const moneyFormat = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(this.valorTotalEstoque);
            console.log("\n\nValor Total: ", moneyFormat);
            console.log("\n");
            //ta dando problema no return, nao sei pq achei q era nos tipos por isso essas conversoes doidas
        });
    }
    pesoTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            var produtos = yield (0, readCSV_1.readCSV)(filePath);
            for (var i of produtos) {
                this.pesoTotalEstoque += parseFloat(i.peso.toString()) * parseInt(i.quantidade.toString());
            }
            console.log("\n\nPeso Total: ", this.pesoTotalEstoque, "Kg\n\n");
        });
    }
    valorMedio() {
        return __awaiter(this, void 0, void 0, function* () {
            var produtos = yield (0, readCSV_1.readCSV)(filePath);
            var media = this.valorTotalEstoque / produtos.length;
            const moneyFormat = new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            }).format(media);
            console.log("\n\nMédia de Valor: ", moneyFormat);
            console.log("\n");
        });
    }
    pesoMedio() {
        return __awaiter(this, void 0, void 0, function* () {
            var produtos = yield (0, readCSV_1.readCSV)(filePath);
            var media = this.pesoTotalEstoque / produtos.length;
            var mediaFormatada = media.toFixed(2);
            console.log("\n\nMédia de Peso: ", mediaFormatada, "Kg\n\n");
        });
    }
    qtdeTotal() {
        return __awaiter(this, void 0, void 0, function* () {
            var produtos = yield (0, readCSV_1.readCSV)(filePath);
            var totalProds = 0;
            for (var i of produtos) {
                totalProds += parseInt(i.quantidade.toString());
            }
            console.log("\n\nTotal de Itens: ", totalProds);
            console.log("\n");
        });
    }
    qtdeProds() {
        return __awaiter(this, void 0, void 0, function* () {
            var produtos = yield (0, readCSV_1.readCSV)(filePath);
            console.log("\n\nTotal de Produtos", produtos.length);
            console.log("\n");
        });
    }
}
exports.estoqueService = estoqueService;
