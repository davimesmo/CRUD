import {readCSV} from "../models/readCSV";
import {writeCSV} from "../models/writeCSV";
import { Data } from '../models/interfaceData';
import fs from "fs";
const receba = require('prompt-sync')({sigint: true});
const filePath = "./models/estoque.csv"

export class estoqueService{
    private valorTotalEstoque:number = 0;
    private pesoTotalEstoque:number =0;
    async criar(data:Data){

        if (!fs.existsSync(filePath)) {
            var Vazio: Data[] = [];
            await writeCSV(filePath, Vazio);
            }
        var produtos: Data[] = await readCSV(filePath);
        var produtoExistente = false;
        if(typeof data.nome != "string" || isNaN(data.peso) || isNaN(data.quantidade) || isNaN(data.valor)){
            throw new Error("ERROU!");
        }else{
            for(var i of produtos){
                
                if(i.nome == data.nome){
                    produtoExistente = true;
                    break;
                }
            }
            if(produtoExistente){
                throw new Error("ERROU!");
            }else{
            var produtosAtualizado: Data[] = [...produtos, data];
            await writeCSV(filePath, produtosAtualizado);
            console.log("\n\nProduto adicionado com sucesso!\n\n");
            }
        }
    }
    async remover(data:Data){
        var produtos : Data[] = await readCSV(filePath);
        var paraRemover = produtos.find(produto => produto.nome === data.nome);
        if (!paraRemover) {
            throw new Error("ERROU!");
        }else{
            console.log("Produto a ser removido:");
            console.log(`Nome: ${paraRemover.nome}`);
            console.log(`Valor: ${paraRemover.valor}`);
            console.log(`Peso: ${paraRemover.peso}`);
            console.log(`Quantidade: ${paraRemover.quantidade}`);
            const confirmacao = receba("\n\nVocê tem certeza que deseja remover o produto? (s/n): \n\n");
            if(confirmacao != 's'){
                console.log("\n\nRemoção Cancelada\n\n");
                return;
            }else{
                var removido = (produtos).filter((produtos)=> produtos.nome != data.nome);
                await writeCSV(filePath, removido);
                console.log("\n\nRemoção concluída\n\n");  
            }
        }
       
    }
    async mostrar(){
        var produtos : Data[] = await readCSV(filePath);
        console.log("\n");
        for(var i of produtos){
            console.log(`Nome: ${i.nome} Peso: ${i.peso} Valor: ${i.valor} Quantidade: ${i.quantidade}`);
        }
        console.log("\n");
    }
    async valorTotal(){
        var produtos : Data[] = await readCSV(filePath);
        for (var i of produtos){
            this.valorTotalEstoque += parseFloat(i.valor.toString()) * parseInt(i.quantidade.toString());
            
        }
        const moneyFormat = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(this.valorTotalEstoque);
        console.log("\n\nValor Total: ", moneyFormat);
        console.log("\n");
        //ta dando problema no return, nao sei pq achei q era nos tipos por isso essas conversoes doidas
    }
    async pesoTotal(){
        var produtos : Data[] = await readCSV(filePath);
        for(var i of produtos){
            this.pesoTotalEstoque += parseFloat(i.peso.toString()) * parseInt(i.quantidade.toString());
        }
        console.log("\n\nPeso Total: ", this.pesoTotalEstoque, "Kg\n\n");
    }
    async valorMedio(){
        var produtos : Data[] = await readCSV(filePath);
        var media = this.valorTotalEstoque/produtos.length;
        const moneyFormat = new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(media);
        console.log("\n\nMédia de Valor: ", moneyFormat);
        console.log("\n");
    }
    async pesoMedio(){
        var produtos : Data[] = await readCSV(filePath);
        var media = this.pesoTotalEstoque/produtos.length;
        var mediaFormatada = media.toFixed(2);
        console.log("\n\nMédia de Peso: ", mediaFormatada, "Kg\n\n");
    }
    async qtdeTotal(){
        var produtos : Data[] = await readCSV(filePath);
        var totalProds:number = 0;
        for(var i of produtos){
            totalProds += parseInt(i.quantidade.toString());
        }
        console.log("\n\nTotal de Itens: ", totalProds);
        console.log("\n");
    }
    async qtdeProds(){
        var produtos : Data[] = await readCSV(filePath);
        console.log("\n\nTotal de Produtos", produtos.length);
        console.log("\n");
    }
}

