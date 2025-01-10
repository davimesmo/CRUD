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
const controleEstoque_1 = require("./controllers/controleEstoque");
const { adicionarProduto } = require('./controllers/controleEstoque');
const receba = require('prompt-sync')({ sigint: true });
(() => __awaiter(void 0, void 0, void 0, function* () {
    console.log("1. Adicionar\n2. Remover\n3. Ver todo o inventário\n4. Valor total do inventário (em reais)\n5. Peso total do inventário (em Kg)\n6. Valor Médio do Inventário\n7. Peso Médio do Inventário\n8. Quantidade de itens do Inventário\n9. Quantidade de Produtos diferentes do Inventário");
    var entrada = receba("O que quer fazer?: ");
    while (entrada != 0) {
        if (entrada == 1) {
            var nome = receba("Nome: ");
            var peso = parseFloat(receba("Peso: "));
            var valor = parseFloat(receba("Valor: "));
            var quantidade = parseInt(receba("Quantidade: "), 10);
            var produto = { nome, peso, valor, quantidade };
            yield adicionarProduto(produto);
        }
        else if (entrada == 2) {
            var identificador = receba("Identificador: ");
            var zero = 0;
            var zero1 = 0;
            var zero2 = 0;
            var produto = { nome: identificador, peso: zero, valor: zero1, quantidade: zero2 };
            yield (0, controleEstoque_1.removerProduto)(produto);
        }
        else if (entrada == 3) {
            yield (0, controleEstoque_1.mostrarInventario)();
        }
        else if (entrada == 4) {
            yield (0, controleEstoque_1.calculaTotal)();
        }
        else if (entrada == 5) {
            yield (0, controleEstoque_1.pesarTotal)();
        }
        else if (entrada == 6) {
            yield (0, controleEstoque_1.calcularVmedio)();
        }
        else if (entrada == 7) {
            yield (0, controleEstoque_1.pesarMedia)();
        }
        else if (entrada == 8) {
            yield (0, controleEstoque_1.qtdeTotal)();
        }
        else if (entrada == 9) {
            yield (0, controleEstoque_1.qtdeProds)();
        }
        console.log("1. Adicionar\n2. Remover\n3. Ver todo o inventário\n4. Valor total do inventário (em reais)\n5. Peso total do inventário (em Kg)\n6. Valor Médio do Inventário\n7. Peso Médio do Inventário\n8. Quantidade de itens do Inventário\n9. Quantidade de Produtos diferentes do Inventário");
        var entrada = receba("O que quer fazer? ");
    }
}))();
