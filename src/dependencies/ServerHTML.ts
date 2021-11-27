/*
    Arquivo de Dependências, este apenas terá a função de passar todas as
    dependências do projeto por injeção, centralizando todas as declarações
    imports de libs externas.

    Importe uma lib e crie uma interface para o uso no projeto.
*/
import express, {Router, request, response} from "express";

//Interface da função Dependencies deste arquivo
export interface IDependency {
    NodeExpress: typeof express,
    ExpressRoute: typeof Router,
}

//Interface da Lib Express
export interface IExpress{
    NodeExpress: typeof express,
}

 //Interface da Lib Router
export interface IRouter{
    ExpressRoute: typeof Router,
}

//Interface para comunicação HTTP passada por parâmetro da rota Router, criada  na /src/route.ts
export interface IComunicationHTTP{
    req: typeof request,
    res: typeof response,
}

//Função única do arquivo ServerHTML
export const Dependencies = ()=>{

    //Declaração de variáveis para exportação
    const NodeExpress = express;
    const ExpressRoute = Router;

    return{
        NodeExpress,
        ExpressRoute
    }
}