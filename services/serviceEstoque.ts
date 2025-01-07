import {readCSV} from "../models/readCSV";
import {writeCSV} from "../models/writeCSV";
import { Data } from '../models/interfaceData';
import fs from "fs";

const filePath = "./models/estoque.csv"

export class estoqueService{
    async criar(data:Data){
        if(typeof data.nome != "string"){
            throw new Error("ERROU!");
        }else{
            await writeCSV(filePath, [data]);
        }
    }
    async remover(data:Data){
        let produtos = readCSV(filePath);
        
        let removido = (await produtos).filter((produtos)=> produtos.nome != data.nome);
        writeCSV(filePath, removido);
    }
}

