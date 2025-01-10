import { calcularVmedio, calculaTotal, mostrarInventario, pesarMedia, pesarTotal, qtdeProds, qtdeTotal, removerProduto } from "./controllers/controleEstoque";

const { adicionarProduto } = require('./controllers/controleEstoque');
const receba = require('prompt-sync')({sigint: true});
(async () => {
    console.log("1. Adicionar\n2. Remover\n3. Ver todo o inventário\n4. Valor total do inventário (em reais)\n5. Peso total do inventário (em Kg)\n6. Valor Médio do Inventário\n7. Peso Médio do Inventário\n8. Quantidade de itens do Inventário\n9. Quantidade de Produtos diferentes do Inventário");
    var  entrada:number = receba("O que quer fazer?: ");
    while(entrada != 0){
        if(entrada == 1){
        var nome = receba("Nome: ");
        var peso = parseFloat(receba("Peso: "));
        var valor = parseFloat(receba("Valor: "));
        var quantidade = parseInt(receba("Quantidade: "), 10);

        var produto = { nome, peso, valor, quantidade };
        await adicionarProduto(produto);
        }else if(entrada == 2){
            var identificador = receba("Identificador: ");
            var zero = 0;
            var zero1 = 0;
            var zero2 = 0;
            var produto = {nome : identificador, peso:zero, valor:zero1, quantidade:zero2};
            await removerProduto(produto);
        }else if(entrada == 3){
            await mostrarInventario();
        }else if(entrada == 4){
            await calculaTotal();
        }else if(entrada == 5){
            await pesarTotal();
        }else if (entrada == 6){
            await calcularVmedio();
        }else if(entrada == 7){
            await pesarMedia();
        }else if(entrada == 8){
            await qtdeTotal();
        }else if(entrada == 9){
            await qtdeProds();
        }
        
    console.log("1. Adicionar\n2. Remover\n3. Ver todo o inventário\n4. Valor total do inventário (em reais)\n5. Peso total do inventário (em Kg)\n6. Valor Médio do Inventário\n7. Peso Médio do Inventário\n8. Quantidade de itens do Inventário\n9. Quantidade de Produtos diferentes do Inventário");
        var entrada:number = receba("O que quer fazer? ");
    }
})();