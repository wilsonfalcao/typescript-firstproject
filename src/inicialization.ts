import {IDependency} from "@dependencies/ServerHTML";
import {RoutigURL} from "./route";

export class Inicialization{

    constructor(private LibsToStartServer : IDependency )
    {}

    public createServer(_servicePort:number = 3333) : void {
        this.initialiseExpress(_servicePort);
    }

    private initialiseExpress(_port:number){
        
        // Instanciando Expresss e configurando rotas
        const _startApp = this.LibsToStartServer.NodeExpress();
        _startApp.use(this.LibsToStartServer.NodeExpress.json());

        //Chamando método de registro de Rotas do Express
        _startApp.use(this.createRoutes())

        //Setando porta servidor
        _startApp.listen(_port);
    }

    private createRoutes(){
        const _buildRoutes = new RoutigURL(this.LibsToStartServer);
        return _buildRoutes.buildRoutes();
    }

}