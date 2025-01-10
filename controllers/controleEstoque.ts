import { Data } from "../models/interfaceData";
import {estoqueService} from "../services/serviceEstoque";
const service = new estoqueService();
export async function adicionarProduto(data:Data){
    try{
        await service.criar(data);
    }catch(error){
        console.log(error);
    }

}
export async function removerProduto(data:Data){
    try{
        await service.remover(data);
    }catch(error){
        console.log(error);
    }
}
export async function mostrarInventario(){
    try{
        await service.mostrar();
    }catch(error){
        console.log(error);
    }
}
export async function calculaTotal(){
    try{
        await service.valorTotal();
    }catch(error){
        console.log(error);
    }}
    export async function pesarTotal(){
        try{
            await service.pesoTotal();
        }catch(error){
            console.log(error);
        }  
}
export async function calcularVmedio(){
    try{
        await service.valorMedio();
    }catch(error){
        console.log(error);
    }  
}
export async function pesarMedia(){
    try{
        await service.pesoMedio();
    }catch(error){
        console.log(error);
    }  
}
export async function qtdeTotal(){
    try{
        await service.qtdeTotal();
    }catch(error){
        console.log(error);
    }  
}
export async function qtdeProds(){
    try{
        await service.qtdeProds();
    }catch(error){
        console.log(error);
    }  
}