import express from 'express';
import Connection from './database/connection';
class App {

        public express: express.Application;
        private connection: Connection | undefined;

    constructor(){
        this.express = express();
        this.db();
    }
    db(){
        this.connection = new Connection();
        this.connection.connection.sync()
        .then(() => {
            console.log(`Database is connected`);
            })
            .catch((err)=> {
                console.log(`Error`, err);
            })
    }

    listen(port: number){
        this.express.listen(port, () => 
            console.log(`Server running in http://localhost:${port}`)
        );
    }
}

export default new App();
