/*
    Importantando interfaces Router que corresponde ao objeto Router do Express
    e IComunicationHTTP que corresponde req, res do objeto Router
    poderá ser visto no arquivo ./src/ServerHTML.ts
*/ 
import {IRouter,IComunicationHTTP} from "@dependencies/ServerHTML";

export class RoutigURL{

    //Construtor da classe / recebendo variável por inversão de dependência e usando declaração de
    // _Router interna do objeto
    constructor(private _Router:IRouter){}

    //Método de criação de rotas
    public buildRoutes (){

        const _route = this._Router.ExpressRoute();

        //Rota principal, fará o redirectionamento
        _route.get('/', ({req, res} : IComunicationHTTP) => {

            res.redirect("https://www.google.com.br");

        });

        //Rota hello, output do texto hello world (Demonstração)
        _route.get('/hello', ({req, res} : IComunicationHTTP) => {

            res.send("<H1>Hello World</H1>");

        });

        return _route;
    }
}
