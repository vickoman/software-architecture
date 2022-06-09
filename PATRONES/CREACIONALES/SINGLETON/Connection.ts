export class ConnectDB {

    private static instance: ConnectDB;

    private constructor() {}

    public static getInstance(): ConnectDB {
        if(this.instance == null) {
            this.instance = new ConnectDB();
        }
        return this.instance;
    }

    public connect(): void {
        console.log("Connectado con la Base de datos");
    }
}