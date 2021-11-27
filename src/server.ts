//Importando Dependecias necessarias para inicialização do Serviço.
import {Dependencies} from "@dependencies/ServerHTML"

//Chamando classe de inicialização
import {Inicialization} from "./inicialization";

//Instanciando Inicialization e injetando dependecias de inicialização
const Server = new Inicialization(Dependencies());

//Startando Serviço com a porta 3000
Server.createServer(3000);