import express, {Router, request, response} from "express";

export interface IDependency {
    NodeExpress: typeof express,
    ExpressRoute: typeof Router,
}

export interface IExpress{
    NodeExpress: typeof express,
}

export interface IRouter{
    ExpressRoute: typeof Router,
}

export interface IComunicationHTTP{
    request: typeof request,
    response: typeof response,
}

export const Dependencies = ()=>{

    const NodeExpress = express;
    const ExpressRoute = Router;

    return{
        NodeExpress,
        ExpressRoute
    }
}