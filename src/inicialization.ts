import {IDependency} from "@dependencies/ServerHTML";
import {RoutigURL} from "./routes";

export class Inicialization{

    constructor(private LibsToStartServer : IDependency )
    {}

    public createServer(_port ?:number) : void {
        
        this.initialiseExpress(_port);
        
    }

    private initialiseExpress(_port?:number) :void{

        // Instanciando Expresss e configurando rotas
        const _startApp = this.LibsToStartServer.NodeExpress();
        _startApp.use(this.LibsToStartServer.NodeExpress.json());

        //Chamando método de registro de Rotas do Express
        _startApp.use(this.initialiseRouteExpress());

        //Setando porta servidor
        _startApp.listen(_port || 3333);

    }

    private initialiseRouteExpress(){

        //Instanciando objeto com rotas de URLs
        const _buildRoutes = new RoutigURL(this.LibsToStartServer);
        return _buildRoutes.buildRoutes();

    }


}