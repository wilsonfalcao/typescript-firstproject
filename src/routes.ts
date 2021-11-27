//Inteface IRouter que corresponde ao objeto Router do Express
//Interface IComunicationHTTP que corresponde aos objetos Request e Response do Router
import {IRouter, IComunicationHTTP} from "@dependencies/ServerHTML";

export class RoutigURL{

    constructor(private _Router:IRouter){}

    public buildRoutes(){

        //Construindo objeto ExpressRoute para manipulação de métodos
        const _route = this._Router.ExpressRoute();

        //Criando rota principal
        _route.get('/', ({request, response} : IComunicationHTTP) => {

            response.redirect("https://www.google.com.br")

        });

        return _route;
    }
}
