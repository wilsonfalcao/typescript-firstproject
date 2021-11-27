export class User{

    public readonly id: string;

    public name: string;
    public local: string;
    public email : string;

    constructor(props: Omit<User,"id">, id?:string){
        Object.assign(this,props);

        if(!id){
            this.id= String(Date.now());
        }
    }

}